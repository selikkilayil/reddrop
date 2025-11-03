'use client'

interface HeaderProps {
  onAddDonor: () => void
  searchTerm: string
  onSearchChange: (term: string) => void
  bloodTypeFilter: string
  onBloodTypeChange: (type: string) => void
}

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

export default function Header({ 
  onAddDonor, 
  searchTerm, 
  onSearchChange, 
  bloodTypeFilter, 
  onBloodTypeChange 
}: HeaderProps) {
  return (
    <header className="blood-gradient text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="mr-2">🩸</span>
              Red Drop
            </h1>
            <button
              onClick={onAddDonor}
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              + Add Donor
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div className="sm:w-48">
              <select
                value={bloodTypeFilter}
                onChange={(e) => onBloodTypeChange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="">All Blood Types</option>
                {bloodTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}