export interface Donor {
  id: number
  name: string
  email: string | null
  phone: string
  blood_type: string
  age: number | null
  weight: number | null
  last_donation: string | null
  address: string | null
  emergency_contact: string | null
  medical_conditions: string | null
  created_at: string
  updated_at: string
}

export interface DonorInput {
  name: string
  email?: string
  phone: string
  blood_type: string
  age?: number
  weight?: number
  last_donation?: string
  address?: string
  emergency_contact?: string
  medical_conditions?: string
}