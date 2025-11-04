'use client'

import Link from 'next/link'

export default function PublicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="mr-2 text-3xl">🩸</span>
              Red Drop - Blood Donor Registry
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">❤️</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Save Lives by Donating Blood
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of life-savers. Register as a blood donor and help us connect you with people in need when your blood type is required.
          </p>
          
          <Link
            href="/register"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            Register as Blood Donor
          </Link>
        </div>

        {/* Why Donate Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Save Lives
            </h3>
            <p className="text-gray-600">
              One donation can save up to three lives. Your blood could be the difference between life and death for someone in need.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quick & Easy
            </h3>
            <p className="text-gray-600">
              Registration takes just a few minutes. We&apos;ll contact you only when your blood type is needed in your area.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community Impact
            </h3>
            <p className="text-gray-600">
              Join thousands of donors making a difference in their communities. Be part of something bigger than yourself.
            </p>
          </div>
        </div>

        {/* Blood Types Section */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            All Blood Types Needed
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
              <div key={type} className="bg-red-100 text-red-800 px-4 py-3 rounded-lg text-center font-bold">
                {type}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4">
            Every blood type is valuable and needed. Register regardless of your blood type!
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Who can donate blood?
              </h4>
              <p className="text-gray-600">
                Generally, healthy individuals aged 18-65 who weigh at least 45kg can donate blood. Some medical conditions may affect eligibility.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                How often can I donate?
              </h4>
              <p className="text-gray-600">
                You can donate whole blood every 8-12 weeks. We&apos;ll keep track of your donation history and only contact you when you&apos;re eligible.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Is my information secure?
              </h4>
              <p className="text-gray-600">
                Yes, all your personal information is kept confidential and used only for blood donation coordination purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Make a Difference?
          </h3>
          <Link
            href="/register"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            Register Now - It Takes 2 Minutes
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 Red Drop Blood Donor Registry. Saving lives one donation at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}