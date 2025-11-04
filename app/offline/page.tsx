'use client'

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 text-center">
        <div className="text-6xl mb-4">📱</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          You&apos;re Offline
        </h1>
        <p className="text-gray-600 mb-6">
          No internet connection detected. Some features may not be available until you&apos;re back online.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Available offline:</strong><br/>
            • View cached donor list<br/>
            • Browse app interface<br/>
            • Access previously loaded data
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}