import { useState } from 'react'
import './App.css'
import Exercise from './Exercise.jsx'
import UserList from './UserList.jsx'

const inputClass =
  'h-10 w-full rounded-lg border border-gray-200 bg-special-mainBg px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500'

const primaryButtonClass =
  'h-10 w-full rounded-md bg-primary text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-special-mainBg'

const linkButtonClass = 'font-semibold text-primary hover:opacity-80'

function Logo() {
  return (
    <div
      className="select-none text-center font-poppins text-[32px] leading-none tracking-wide text-primary"
      aria-label="FINEbank.IO"
    >
      <span className="font-bold">FINE</span>
      <span className="font-light">bank</span>
      <span className="font-bold">.IO</span>
    </div>
  )
}

function Field({ id, label, children, aside }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        {aside}
      </div>
      {children}
    </div>
  )
}

function PasswordInput({ id, value, onChange }) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <input
        id={id}
        type={show ? 'text' : 'password'}
        autoComplete="current-password"
        required
        value={value}
        onChange={onChange}
        placeholder="••••••••••••••"
        className={`${inputClass} pr-10`}
      />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        aria-label={show ? 'Hide password' : 'Show password'}
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
          {show && <path d="M4 4l16 16" />}
        </svg>
      </button>
    </div>
  )
}

function Divider({ children }) {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-gray-200" />
      <span className="text-xs text-gray-400">{children}</span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  )
}

function GoogleButton() {
  return (
    <button
      type="button"
      className="flex h-10 w-full items-center justify-center gap-3 rounded-md bg-gray-200/80 text-sm text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
      </svg>
      Continue with Google
    </button>
  )
}

function App() {
  const [view, setView] = useState('login')
  const [tab, setTab] = useState('users')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSignedIn, setKeepSignedIn] = useState(true)

  const goTo = (next) => () => setView(next)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ view, name, email, password, keepSignedIn })

    if (view === 'login' || view === 'register') setView('app')
  }

  if (view === 'app') {
    const tabClass = (name) =>
      `rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
        tab === name ? 'bg-primary text-white' : 'text-gray-01 hover:bg-gray-05'
      }`

    return (
      <div className="min-h-screen bg-special-mainBg">
        <nav className="flex items-center justify-between bg-white px-4 py-3 shadow-sm">
          <div className="flex gap-2">
            <button type="button" onClick={() => setTab('users')} className={tabClass('users')}>
              User Cards
            </button>
            <button type="button" onClick={() => setTab('posts')} className={tabClass('posts')}>
              Post Cards
            </button>
          </div>
          <button
            type="button"
            onClick={goTo('login')}
            className="text-sm font-semibold text-gray-01 hover:text-defaultBlack"
          >
            Logout
          </button>
        </nav>

        {tab === 'users' ? <UserList /> : <Exercise />}
      </div>
    )
  }

  return (
    <main className="flex min-h-screen items-start justify-center bg-special-mainBg px-4 pt-28 sm:pt-32">
      <div className="w-full max-w-[332px]">
        <Logo />

        {view === 'login' && (
          <>
            <form onSubmit={handleSubmit} className="mt-12 space-y-5">
              <Field id="email" label="Email Address">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@email.com"
                  className={inputClass}
                />
              </Field>

              <Field
                id="password"
                label="Password"
                aside={
                  <button
                    type="button"
                    onClick={goTo('forgot')}
                    className="text-[11px] font-medium text-primary hover:opacity-80"
                  >
                    Forgot Password?
                  </button>
                }
              >
                <PasswordInput
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-primary"
                />
                Keep me signed in
              </label>

              <button type="submit" className={primaryButtonClass}>
                Login
              </button>
            </form>

            <Divider>or sign in with</Divider>
            <GoogleButton />

            <div className="mt-8 text-center text-sm">
              <button type="button" onClick={goTo('register')} className={linkButtonClass}>
                Create an account
              </button>
            </div>
          </>
        )}

        {view === 'register' && (
          <>
            <h1 className="mt-5 text-center text-base font-bold text-gray-900">Create an account</h1>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <Field id="name" label="Name">
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tanzir Rahman"
                  className={inputClass}
                />
              </Field>

              <Field id="register-email" label="Email Address">
                <input
                  id="register-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className={inputClass}
                />
              </Field>

              <Field id="register-password" label="Password">
                <PasswordInput
                  id="register-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>

              <p className="text-[11px] text-gray-500">
                By continuing, you agree to our{' '}
                <a href="#" className="text-primary hover:opacity-80">
                  terms of service
                </a>
                .
              </p>

              <button type="submit" className={primaryButtonClass}>
                Sign up
              </button>
            </form>

            <Divider>or sign up with</Divider>
            <GoogleButton />

            <p className="mt-8 text-center text-xs text-gray-400">
              Already have an account?{' '}
              <button type="button" onClick={goTo('login')} className={linkButtonClass}>
                Sign in here
              </button>
            </p>
          </>
        )}

        {view === 'forgot' && (
          <>
            <div className="mt-10 text-center">
              <h1 className="text-xl font-bold text-gray-900">Forgot Password?</h1>
              <p className="mx-auto mt-3 max-w-[260px] text-[15px] leading-relaxed text-gray-500">
                Enter your email address to get the password reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <Field id="reset-email" label="Email Address">
                <input
                  id="reset-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className={inputClass}
                />
              </Field>

              <button type="submit" className={primaryButtonClass}>
                Password Reset
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <button
                type="button"
                onClick={goTo('login')}
                className="font-semibold text-gray-500 hover:text-gray-700"
              >
                Back to login
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default App
