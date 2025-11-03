'use client'

import { Donor } from '@/lib/types'
import DonorCard from '@/components/DonorCard'

interface DonorListProps {
  donors: Donor[]
  loading: boolean
}

export default function DonorList({ donors, loading }: DonorListProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (donors.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🩸</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No donors found</h3>
        <p className="text-gray-500">Add your first donor or adjust your search filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donors.map((donor) => (
        <DonorCard key={donor.id} donor={donor} />
      ))}
    </div>
  )
}