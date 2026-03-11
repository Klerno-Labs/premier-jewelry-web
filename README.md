# ApexCRM - Custom Business Application

## Overview
ApexCRM is a modern, high-performance web application built to manage core business operations, user administration, and data organization. Designed for scalability and speed, it utilizes the latest web technologies to provide a seamless user experience across desktop and mobile devices.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + CVA (Class Variance Authority)
- **Database:** PostgreSQL (Vercel Postgres / Neon)
- **ORM:** Drizzle ORM
- **Authentication:** NextAuth.js v5 (Auth.js)
- **Forms:** React Hook Form + Zod
- **State Management:** Zustand
- **Deployment:** Vercel
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Features
- **User Authentication:** Secure email/password login, role-based access control (RBAC), and session management.
- **Admin Dashboard:** Comprehensive overview of system metrics, user management, and activity logs.
- **File Management:** Secure cloud storage integration for file uploads and asset management.
- **Email Notifications:** Automated transactional emails for key user actions.
- **Responsive Design:** Fully fluid interface optimized for all screen sizes.

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- pnpm (recommended) or npm/yarn
- A PostgreSQL database (Vercel Postgres recommended)
- Environment variables configured

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pegrio/apex-crm.git
   cd apex-crm
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Copy the example environment file and fill in your variables:
   ```bash
   cp .env.example .env.local
   ```
   *See `Environment_Setup.md` for detailed variable descriptions.*

4. **Database Setup**
   Push the database schema to your PostgreSQL instance:
   ```bash
   pnpm drizzle-kit push:pg
   ```

5. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # React components
│   ├── ui/          # Reusable UI primitives (shadcn/ui style)
│   └── features/    # Feature-specific components
├── lib/             # Utility functions and configurations
├── hooks/           # Custom React hooks
├── store/           # Zustand state stores
└── styles/          # Global styles and Tailwind config
```

## Deployment
This application is optimized for Vercel.

1. Push your code to your Git repository.
2. Import the project into Vercel.
3. Add your Environment Variables in the Vercel dashboard.
4. Deploy.

## Documentation
- [API Documentation](./API_Documentation.md)
- [Admin Guide](./Admin_Guide.md)
- [Environment Setup](./Environment_Setup.md)
- [Client Summary](./Client_Summary.md)

## Support
For technical support or warranty claims, contact support@pegrio.com.

---
© 2024 Pegrio LLC. All rights reserved.