import { useEffect, useRef } from 'react'
import { supabase, isSupabaseEnabled, TRIP_ID } from './supabaseClient'

// Syncs the trip document to a shared Supabase row so state is durable and
// shared across devices, while localStorage (via usePersistedTripState) stays
// as the fast local cache / offline fallback.
//
// MVP semantics: load-on-mount (remote wins if a row exists, else seed it),
// then debounced write-back on every change. Last-write-wins on the JSON blob.
// If Supabase isn't configured, this hook is a no-op.
export function useSupabaseSync(doc, setDoc) {
  const hydratedRef = useRef(false)
  const suppressWriteRef = useRef(false)
  const lastSyncedRef = useRef('')
  const timerRef = useRef(null)

  // Phase A — hydrate from the remote row on mount.
  useEffect(() => {
    if (!isSupabaseEnabled) {
      hydratedRef.current = true
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        const { data, error } = await supabase
          .from('trips')
          .select('doc')
          .eq('id', TRIP_ID)
          .maybeSingle()
        if (cancelled) return
        if (error) {
          console.warn('[supabase] load failed:', error.message)
          return
        }
        if (data?.doc) {
          // Remote state exists — adopt it and skip the write it triggers.
          suppressWriteRef.current = true
          lastSyncedRef.current = JSON.stringify(data.doc)
          setDoc(data.doc)
        } else {
          // No row yet — seed it from the current local doc.
          lastSyncedRef.current = JSON.stringify(doc)
          const { error: insErr } = await supabase.from('trips').insert({ id: TRIP_ID, doc })
          if (insErr) console.warn('[supabase] seed insert failed:', insErr.message)
        }
      } catch (e) {
        console.warn('[supabase] load error:', e?.message || e)
      } finally {
        hydratedRef.current = true
      }
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Phase B — debounced write-back on change.
  useEffect(() => {
    if (!isSupabaseEnabled || !hydratedRef.current) return
    if (suppressWriteRef.current) {
      suppressWriteRef.current = false
      return
    }
    const serialized = JSON.stringify(doc)
    if (serialized === lastSyncedRef.current) return

    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(async () => {
      lastSyncedRef.current = serialized
      const { error } = await supabase
        .from('trips')
        .upsert({ id: TRIP_ID, doc, updated_at: new Date().toISOString() })
      if (error) console.warn('[supabase] save failed:', error.message)
    }, 800)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc])
}
