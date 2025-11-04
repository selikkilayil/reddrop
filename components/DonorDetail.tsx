'use client'

import { Donor } from '@/lib/types'

interface DonorDetailProps {
  donor: Donor
  onClose: () => void
}

export default function DonorDetail({ donor, onClose }: DonorDetailProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never'
    return new Date(dateString).toLocaleDateString()
  }

  const getBloodTypeColor = (bloodType: string) => {
    const colors: { [key: string]: string } = {
      'A+': 'bg-red-100 text-red-800',
      'A-': 'bg-red-200 text-red-900',
      'B+': 'bg-blue-100 text-blue-800',
      'B-': 'bg-blue-200 text-blue-900',
      'AB+': 'bg-purple-100 text-purple-800',
      'AB-': 'bg-purple-200 text-purple-900',
      'O+': 'bg-green-100 text-green-800',
      'O-': 'bg-green-200 text-green-900',
    }
    return colors[bloodType] || 'bg-gray-100 text-gray-800'
  }

  const handleCall = () => {
    window.location.href = `tel:${donor.phone}`
  }

  const handleShare = async () => {
    const shareData = {
      title: `Blood Donor: ${donor.name}`,
      text: `${donor.name}\n${donor.phone}\n${donor.blood_type}`,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log('Error sharing:', error)
        fallbackShare()
      }
    } else {
      fallbackShare()
    }
  }

  const fallbackShare = () => {
    const text = `${donor.name}\n${donor.phone}\n${donor.blood_type}`
    navigator.clipboard.writeText(text).then(() => {
      alert('Contact information copied to clipboard!')
    }).catch(() => {
      alert('Unable to copy to clipboard')
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{donor.name}</h2>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBloodTypeColor(donor.blood_type)}`}>
                {donor.blood_type}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl ml-4"
            >
              ×
            </button>
          </div>

          {/* Contact Actions */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleCall}
              className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call
            </button>
            <button
              onClick={handleShare}
              className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📤</span>
              Share
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-lg">📞</span>
                  <div>
                    <p className="font-medium text-gray-800">{donor.phone}</p>
                    <p className="text-sm text-gray-600">Phone</p>
                  </div>
                </div>
                
                {donor.email && (
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-3 text-lg">📧</span>
                    <div>
                      <p className="font-medium text-gray-800">{donor.email}</p>
                      <p className="text-sm text-gray-600">Email</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Personal Information</h3>
              <div className="space-y-3">
                {donor.age && (
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-3 text-lg">🎂</span>
                    <div>
                      <p className="font-medium text-gray-800">{donor.age} years old</p>
                      <p className="text-sm text-gray-600">Age</p>
                    </div>
                  </div>
                )}
                
                {donor.weight && (
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-3 text-lg">⚖️</span>
                    <div>
                      <p className="font-medium text-gray-800">{donor.weight} kg</p>
                      <p className="text-sm text-gray-600">Weight</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-lg">📅</span>
                  <div>
                    <p className="font-medium text-gray-800">{formatDate(donor.last_donation)}</p>
                    <p className="text-sm text-gray-600">Last Donation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            {donor.address && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Address</h3>
                <div className="flex items-start">
                  <span className="w-6 h-6 mr-3 text-lg mt-0.5">📍</span>
                  <p className="text-gray-800">{donor.address}</p>
                </div>
              </div>
            )}

            {/* Emergency Contact */}
            {donor.emergency_contact && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Emergency Contact</h3>
                <div className="flex items-start">
                  <span className="w-6 h-6 mr-3 text-lg mt-0.5">🚨</span>
                  <p className="text-gray-800">{donor.emergency_contact}</p>
                </div>
              </div>
            )}

            {/* Medical Conditions */}
            {donor.medical_conditions && (
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-3">Medical Conditions</h3>
                <div className="flex items-start">
                  <span className="w-6 h-6 mr-3 text-lg mt-0.5">⚕️</span>
                  <p className="text-yellow-800">{donor.medical_conditions}</p>
                </div>
              </div>
            )}
          </div>

          {/* Registration Date */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Registered: {new Date(donor.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}