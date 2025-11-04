'use client'

import { useState, useEffect, useCallback } from 'react'
import { Donor } from '@/lib/types'
import DonorList from '@/components/DonorList'
import DonorForm from '@/components/DonorForm'
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  const [donors, setDonors] = useState<Donor[]>([])
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [bloodTypeFilter, setBloodTypeFilter] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('bloodDonorAuth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      fetchDonors()
    } else {
      setLoading(false)
    }
    setAuthLoading(false)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchDonors()
    }
  }, [isAuthenticated])

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

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('bloodDonorAuth')
    setIsAuthenticated(false)
    setDonors([])
    setFilteredDonors([])
  }

  // Show loading screen while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <main className="min-h-screen">
      <Header 
        onAddDonor={() => setShowForm(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        bloodTypeFilter={bloodTypeFilter}
        onBloodTypeChange={setBloodTypeFilter}
        onLogout={handleLogout}
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