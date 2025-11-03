'use client'

import { useState, useEffect, useCallback } from 'react'
import { Donor } from '@/lib/types'
import DonorList from '@/components/DonorList'
import DonorForm from '@/components/DonorForm'
import Header from '@/components/Header'

export default function Home() {
  const [donors, setDonors] = useState<Donor[]>([])
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [bloodTypeFilter, setBloodTypeFilter] = useState('')

  useEffect(() => {
    fetchDonors()
  }, [])

  const filterDonors = useCallback(() => {
    let filtered = donors

    if (searchTerm) {
      filtered = filtered.filter(donor =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (donor.email && donor.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        donor.phone.includes(searchTerm)
      )
    }

    if (bloodTypeFilter) {
      filtered = filtered.filter(donor => donor.blood_type === bloodTypeFilter)
    }

    setFilteredDonors(filtered)
  }, [donors, searchTerm, bloodTypeFilter])

  useEffect(() => {
    filterDonors()
  }, [filterDonors])

  const fetchDonors = async () => {
    try {
      const response = await fetch('/api/donors')
      if (response.ok) {
        const data = await response.json()
        setDonors(data)
      }
    } catch (error) {
      console.error('Error fetching donors:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDonorAdded = (newDonor: Donor) => {
    setDonors([newDonor, ...donors])
    setShowForm(false)
  }

  return (
    <main className="min-h-screen">
      <Header 
        onAddDonor={() => setShowForm(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        bloodTypeFilter={bloodTypeFilter}
        onBloodTypeChange={setBloodTypeFilter}
      />
      
      <div className="container mx-auto px-4 py-6">
        {showForm && (
          <DonorForm 
            onClose={() => setShowForm(false)}
            onDonorAdded={handleDonorAdded}
          />
        )}
        
        <DonorList 
          donors={filteredDonors}
          loading={loading}
        />
      </div>
    </main>
  )
}