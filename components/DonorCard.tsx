'use client'

import { useState } from 'react'
import { Donor } from '@/lib/types'
import DonorDetail from '@/components/DonorDetail'

interface DonorCardProps {
  donor: Donor
}

export default function DonorCard({ donor }: DonorCardProps) {
  const [showDetail, setShowDetail] = useState(false)

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

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        {/* Header with Name and Blood Type */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">{donor.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Tap to view details</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-lg font-bold ${getBloodTypeColor(donor.blood_type)}`}>
            {donor.blood_type}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.location.href = `tel:${donor.phone}`
            }}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <span className="mr-2">📞</span>
            Call
          </button>
          <button
            onClick={async (e) => {
              e.stopPropagation()
              const shareData = {
                title: `Blood Donor: ${donor.name}`,
                text: `${donor.name}\n${donor.phone}\n${donor.blood_type}`,
              }
              if (navigator.share) {
                try {
                  await navigator.share(shareData)
                } catch (error) {
                  const text = `${donor.name}\n${donor.phone}\n${donor.blood_type}`
                  navigator.clipboard.writeText(text).then(() => {
                    alert('Contact copied to clipboard!')
                  })
                }
              } else {
                const text = `${donor.name}\n${donor.phone}\n${donor.blood_type}`
                navigator.clipboard.writeText(text).then(() => {
                  alert('Contact copied to clipboard!')
                })
              }
            }}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <span className="mr-2">📤</span>
            Share
          </button>
        </div>
      </div>

      {showDetail && (
        <DonorDetail 
          donor={donor} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </>
  )
}