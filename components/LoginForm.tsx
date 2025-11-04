'use client'

import { useState } from 'react'

interface LoginFormProps {
  onLogin: () => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [loginKey, setLoginKey] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: loginKey }),
      })

      if (response.ok) {
        // Store login status in localStorage
        localStorage.setItem('bloodDonorAuth', 'true')
        onLogin()
      } else {
        setError('Invalid login key. Please try again.')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🩸</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Red drop
          </h1>
          <p className="text-gray-600">
            Enter your access key to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Access Key
            </label>
            <input
              type="password"
              value={loginKey}
              onChange={(e) => setLoginKey(e.target.value)}
              placeholder="Enter your access key"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-gray-900 text-lg text-center"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !loginKey.trim()}
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Access System'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Secure access to blood donor management system
          </p>
        </div>
      </div>
    </div>
  )
}