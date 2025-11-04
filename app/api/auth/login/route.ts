import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json()
    
    // Get the login key from environment variables
    const validKey = process.env.LOGIN_KEY
    
    if (!validKey) {
      return NextResponse.json(
        { error: 'Login system not configured' },
        { status: 500 }
      )
    }
    
    // Check if the provided key matches the environment key
    if (key === validKey) {
      return NextResponse.json({ success: true }, { status: 200 })
    } else {
      return NextResponse.json(
        { error: 'Invalid access key' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}