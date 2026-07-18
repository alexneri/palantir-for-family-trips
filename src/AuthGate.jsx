import { useEffect, useState } from 'react'
import { supabase, isSupabaseEnabled } from './supabaseClient'

// Gates the whole app behind Supabase magic-link auth + an allowlist check.
// If Supabase isn't configured (local dev without env), it runs open.
export function AuthGate({ children }) {
  const [status, setStatus] = useState(isSupabaseEnabled ? 'loading' : 'allowed') // loading | signedout | denied | allowed
  const [email, setEmail] = useState(null)

  useEffect(() => {
    if (!isSupabaseEnabled) return
    let active = true

    async function resolve(session) {
      if (!active) return
      if (!session) {
        setEmail(null)
        setStatus('signedout')
        return
      }
      setEmail(session.user?.email || null)
      try {
        const { data, error } = await supabase.rpc('is_allowed_member')
        if (!active) return
        if (error) {
          console.warn('[auth] membership check failed:', error.message)
          setStatus('denied')
          return
        }
        setStatus(data === true ? 'allowed' : 'denied')
      } catch (e) {
        if (active) setStatus('denied')
      }
    }

    supabase.auth.getSession().then(({ data }) => resolve(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => resolve(session))
    return () => {
      active = false
      sub?.subscription?.unsubscribe()
    }
  }, [])

  if (!isSupabaseEnabled || status === 'allowed') {
    return (
      <>
        {children}
        {isSupabaseEnabled && <SignOutBadge email={email} />}
      </>
    )
  }
  if (status === 'loading') {
    return (
      <Shell>
        <p style={dim}>Checking access…</p>
      </Shell>
    )
  }
  if (status === 'denied') return <Denied email={email} />
  return <Login />
}

function Login() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setErr('')
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo: window.location.origin, shouldCreateUser: true },
    })
    setBusy(false)
    if (error) setErr(error.message)
    else setSent(true)
  }

  return (
    <Shell>
      <div style={eyebrow}>ACCESS CONTROL</div>
      <h1 style={title}>Singapore 2027</h1>
      {sent ? (
        <p style={dim}>
          Sign-in link sent to <b style={{ color: '#e6edf3' }}>{email}</b>. Open it on this device to enter the
          command center.
        </p>
      ) : (
        <form onSubmit={submit}>
          <p style={dim}>Private trip planner. Enter your email and we'll send a one-time sign-in link.</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={input}
          />
          <button type="submit" disabled={busy} style={button}>
            {busy ? 'Sending…' : 'Send magic link'}
          </button>
          {err && <p style={{ color: '#f85149', marginTop: 12, fontSize: 13 }}>{err}</p>}
        </form>
      )}
    </Shell>
  )
}

function Denied({ email }) {
  return (
    <Shell>
      <div style={eyebrow}>ACCESS CONTROL</div>
      <h1 style={title}>Not on the guest list</h1>
      <p style={dim}>
        <b style={{ color: '#e6edf3' }}>{email}</b> isn't approved for this trip yet. Ask Alex to add you, then sign in
        again.
      </p>
      <button onClick={() => supabase.auth.signOut()} style={button}>
        Sign out
      </button>
    </Shell>
  )
}

function SignOutBadge({ email }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 12,
        right: 12,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(13,17,23,0.85)',
        border: '1px solid #30363d',
        borderRadius: 999,
        padding: '6px 11px',
        fontSize: 12,
        color: '#8b949e',
        backdropFilter: 'blur(6px)',
      }}
    >
      <span>{email}</span>
      <button
        onClick={() => supabase.auth.signOut()}
        style={{ background: 'none', border: 'none', color: '#58A6FF', cursor: 'pointer', fontSize: 12, padding: 0 }}
      >
        sign out
      </button>
    </div>
  )
}

function Shell({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0d1117',
        color: '#e6edf3',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: 14,
          padding: '28px 26px',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const eyebrow = { fontSize: 11, letterSpacing: '0.14em', color: '#58A6FF', fontWeight: 700, marginBottom: 8 }
const title = { fontSize: 22, margin: '0 0 14px', color: '#e6edf3', fontWeight: 700 }
const dim = { color: '#8b949e', fontSize: 14, lineHeight: 1.5, margin: '0 0 18px' }
const input = {
  width: '100%',
  boxSizing: 'border-box',
  background: '#0d1117',
  border: '1px solid #30363d',
  borderRadius: 8,
  padding: '11px 12px',
  color: '#e6edf3',
  fontSize: 14,
  marginBottom: 12,
  outline: 'none',
}
const button = {
  width: '100%',
  background: '#238636',
  border: '1px solid #2ea043',
  color: 'white',
  borderRadius: 8,
  padding: '11px 12px',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
}
