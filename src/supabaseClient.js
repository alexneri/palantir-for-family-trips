import { createClient } from '@supabase/supabase-js'

// Client-safe values (anon key + project URL). Absent in local dev without a .env,
// in which case the app falls back to localStorage-only behaviour.
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseEnabled = Boolean(url && anonKey)

// One shared trip document per id. Single-trip app for now.
export const TRIP_ID = import.meta.env.VITE_TRIP_ID || 'singapore-2027'

export const supabase = isSupabaseEnabled
  ? createClient(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null
