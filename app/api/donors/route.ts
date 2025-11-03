import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { DonorInput } from '@/lib/types'

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM donors ORDER BY created_at DESC'
    )
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching donors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donors' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: DonorInput = await request.json()
    
    const {
      name,
      email,
      phone,
      blood_type,
      age,
      weight,
      last_donation,
      address,
      emergency_contact,
      medical_conditions
    } = body

    const result = await pool.query(
      `INSERT INTO donors (
        name, email, phone, blood_type, age, weight, 
        last_donation, address, emergency_contact, medical_conditions
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
      RETURNING *`,
      [
        name,
        email || null,
        phone,
        blood_type,
        age || null,
        weight || null,
        last_donation || null,
        address || null,
        emergency_contact || null,
        medical_conditions || null
      ]
    )

    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('Error creating donor:', error)
    return NextResponse.json(
      { error: 'Failed to create donor' },
      { status: 500 }
    )
  }
}