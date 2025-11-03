# Blood Donor Management PWA

A Progressive Web App built with Next.js for managing blood donor information. Features include donor registration, search, filtering by blood type, and mobile-friendly responsive design.

## Features

- 📱 **Progressive Web App** - Installable on mobile devices
- 🩸 **Blood Type Management** - Filter donors by blood type (A+, A-, B+, B-, AB+, AB-, O+, O-)
- 🔍 **Search & Filter** - Search by name, email, or phone number
- 📝 **Donor Registration** - Add new donors with minimal required information (name, phone, blood type)
- 📊 **Donor Information** - Track medical conditions, last donation dates, emergency contacts
- 🎨 **Mobile-First Design** - Fully responsive and touch-friendly interface
- 🗄️ **PostgreSQL Database** - Reliable data storage with proper indexing

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **PWA**: next-pwa for service worker and manifest

## Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

1. Install PostgreSQL if not already installed
2. Create the database and tables:

```bash
psql -U postgres -f scripts/init-db.sql
```

### 3. Environment Configuration

Update `.env.local` with your database credentials:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/blood_donors
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### 5. Install as PWA

On mobile devices or desktop browsers:
1. Open the app in your browser
2. Look for "Add to Home Screen" or "Install App" option
3. Follow the prompts to install

## Database Schema

The `donors` table includes:
- **Required fields**: name, phone, blood type
- **Optional fields**: email, age, weight, address, emergency contact, medical conditions, last donation date
- Timestamps for record keeping

This flexible schema allows for quick donor registration with minimal information while supporting comprehensive data when available.

## API Endpoints

- `GET /api/donors` - Fetch all donors
- `POST /api/donors` - Create new donor

## Mobile Features

- Touch-friendly interface
- Responsive grid layout
- Mobile-optimized forms
- Offline capability (PWA)
- App-like experience when installed

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

For deployment to platforms like Vercel, Netlify, or your own server, ensure your PostgreSQL database is accessible and update the `DATABASE_URL` accordingly.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your blood donation management needs.