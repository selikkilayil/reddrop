import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    // Test database connection
    console.log(process.env.DATABASE_URL);
    const result = await pool.query('SELECT NOW() as current_time, COUNT(*) as donor_count FROM donors')
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      data: result.rows[0],
      database_url: process.env.DATABASE_URL ? 'Set' : 'Not set'
    })
  } catch (error) {
    console.error('Database test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      database_url: process.env.DATABASE_URL ? 'Set' : 'Not set'
    }, { status: 500 })
  }
}