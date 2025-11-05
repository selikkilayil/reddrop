# Community Donor Management System

A self-hostable Progressive Web App for community organizations to manage blood donor information. Built with Next.js, this system enables communities, hospitals, NGOs, and volunteer organizations to efficiently track and coordinate blood donation efforts.

## 🌟 Perfect for Communities

This system is designed for **self-hosting by any community organization** that needs to manage blood donors:

- **Local Blood Banks** - Track regular donors and coordinate drives
- **Community Centers** - Organize neighborhood donation events  
- **Religious Organizations** - Manage congregation donor programs
- **Schools & Universities** - Run student/staff donation campaigns
- **NGOs & Nonprofits** - Coordinate emergency blood collection
- **Corporate Programs** - Employee blood donation initiatives
- **Emergency Response Teams** - Maintain donor databases for crisis situations

## 🚀 Why Self-Host?

- **Complete Data Control** - Your donor data stays on your servers
- **Privacy First** - No third-party data sharing or tracking
- **Customizable** - Modify to fit your community's specific needs
- **Cost Effective** - No monthly fees or per-user charges
- **Offline Capable** - Works even with poor internet connectivity
- **Mobile Ready** - Installable as an app on any device

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

## 🚀 Quick Start for Communities

### Option 1: One-Click Deploy (Recommended for beginners)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/community-donor-management)

1. Click the deploy button above
2. Connect your GitHub account
3. Add a PostgreSQL database (Vercel will guide you)
4. Your community donor system is live!

### Option 2: Self-Host on Your Own Server

#### Prerequisites
- Node.js 18+ 
- PostgreSQL 12+ (or use a cloud database)
- Basic command line knowledge

#### Step 1: Clone and Install
```bash
git clone https://github.com/yourusername/community-donor-management.git
cd community-donor-management
npm install
```

#### Step 2: Database Setup

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt update && sudo apt install postgresql postgresql-contrib

# Create database
sudo -u postgres createdb blood_donors
sudo -u postgres psql -f scripts/init-db.sql blood_donors
```

**Option B: Cloud Database (Easier)**
- Use [Supabase](https://supabase.com) (free tier available)
- Use [Railway](https://railway.app) PostgreSQL
- Use [Neon](https://neon.tech) (serverless PostgreSQL)

#### Step 3: Configure Environment
```bash
cp .env.local.example .env.local
# Edit .env.local with your database URL
```

#### Step 4: Launch Your Community System
```bash
npm run build
npm start
```

Your donor management system is now running at `http://localhost:3000`!

### 📱 Install as Mobile App

Once deployed, your community members can install this as a mobile app:
1. Visit your site on their phone
2. Tap "Add to Home Screen" 
3. Use like a native app - works offline too!

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

## 🌐 Deployment Options for Communities

### Cloud Platforms (Easiest)
- **Vercel** - Free tier, automatic deployments from GitHub
- **Netlify** - Great for static hosting with serverless functions  
- **Railway** - Simple deployment with built-in PostgreSQL
- **Render** - Free tier with PostgreSQL addon

### Self-Hosted Options
- **Digital Ocean Droplet** - $5/month VPS
- **AWS EC2** - Pay-as-you-go cloud server
- **Local Server** - Raspberry Pi or old computer
- **Shared Hosting** - Many providers support Node.js

### Database Hosting
- **Supabase** - Free PostgreSQL with 500MB storage
- **Railway** - $5/month PostgreSQL 
- **Neon** - Serverless PostgreSQL with free tier
- **Local PostgreSQL** - Self-hosted on your server

## 🔧 Customization for Your Community

This system is built to be easily customized:

### Branding
- Update colors in `tailwind.config.js`
- Replace logo and icons in `/public`
- Modify app name in `manifest.json`

### Fields & Data
- Add custom donor fields in `lib/types.ts`
- Modify database schema in `scripts/init-db.sql`
- Update forms in `/components`

### Features
- Add SMS notifications
- Integrate with email services
- Add appointment scheduling
- Create donation history reports

## 🔒 Security & Privacy

This system is designed with privacy and security in mind:

### Data Protection
- **Local Data Storage** - All donor data stays on your servers
- **No Third-Party Tracking** - No analytics or external data sharing
- **Encrypted Connections** - HTTPS enforced in production
- **Secure Database** - PostgreSQL with proper access controls

### HIPAA & Privacy Compliance
- Minimal data collection (only what's needed)
- Secure data transmission
- Access logging capabilities
- Data retention controls
- Easy data export/deletion

### Security Best Practices
- Change default passwords immediately
- Use strong database credentials
- Enable SSL/TLS certificates
- Regular security updates
- Backup your data regularly

### Recommended Security Setup
```bash
# Generate a strong secret key
openssl rand -base64 32

# Use environment variables for all secrets
# Never commit .env.local to version control
```

## 🤝 Community Support

### Getting Help
- 📖 Check the [Wiki](../../wiki) for detailed guides
- 🐛 Report issues in [GitHub Issues](../../issues)
- 💬 Join discussions in [GitHub Discussions](../../discussions)
- 📧 Email: [your-email@domain.com]

### Success Stories
We'd love to hear how your community uses this system! Share your story by opening a discussion.

## 🤝 Contributing to the Community

We welcome contributions from community organizations and developers!

### Ways to Contribute
- 🐛 **Report Bugs** - Help us improve the system
- 💡 **Suggest Features** - What does your community need?
- 📝 **Documentation** - Help others deploy successfully  
- 🔧 **Code Contributions** - Add features or fix issues
- 🌍 **Translations** - Make it accessible to more communities
- 📖 **Share Your Story** - How does your community use this?

### Development Setup
```bash
git clone https://github.com/yourusername/community-donor-management.git
cd community-donor-management
npm install
npm run dev
```

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

**MIT License** - This project is completely free and open source.

You are free to:
- ✅ Use commercially
- ✅ Modify and distribute
- ✅ Use privately
- ✅ Sublicense

**This means your community can use, modify, and even sell this software without any restrictions.**

## 🙏 Acknowledgments

Built with love for communities worldwide. Special thanks to:
- All the community organizations testing and providing feedback
- Contributors who help improve the system
- The open source community for the amazing tools this is built on

---

**⭐ If this helps your community, please star the repository to help others discover it!**

**🚀 Ready to deploy? [Start here](#-quick-start-for-communities)**