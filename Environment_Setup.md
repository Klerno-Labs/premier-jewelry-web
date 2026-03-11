# Environment Setup Guide

To run the ApexCRM application, you must configure the following environment variables. Create a `.env.local` file in the root of the project for local development, and add these to your Vercel project settings for production.

## Database Configuration (PostgreSQL)

We use Vercel Postgres or Neon as the database provider.

```bash
# The connection string for your PostgreSQL database.
# Obtain this from your Vercel Project Dashboard > Storage.
POSTGRES_URL="postgres://user:password@host:port/dbname?sslmode=require"

# Optional: Prisma/Drizzle specific non-url connection params (if using pooled connections)
POSTGRES_PRISMA_URL="postgres://user:password@host:port/dbname?sslmode=require&pgbouncer=true"
POSTGRES_URL_NON_POOLING="postgres://user:password@host:port/dbname?sslmode=require"
```

## Authentication (NextAuth.js v5)

NextAuth requires a secret to encrypt tokens and cookies.

```bash
# Generate a secure random string. You can run: openssl rand -base64 32
NEXTAUTH_SECRET="your-super-long-random-secret-key-here"

# The base URL of your application.
# Local: http://localhost:3000
# Production: https://your-domain.com
NEXTAUTH_URL="http://localhost:3000"
```

## OAuth Providers (Optional)

If you have enabled Google or GitHub login:

```bash
# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

## Third-Party Integrations

### Email (Resend)
Used for sending transactional emails.

```bash
RESEND_API_KEY="re_your_resend_api_key"
NEXT_PUBLIC_APP_URL="http://localhost:3000" # Used for generating links in emails
```

### File Storage (AWS S3 / Compatible)
Used for user uploads and assets.

```bash
# Your AWS Access Key ID and Secret Access Key
AWS_ACCESS_KEY_ID="your-access-key-id"
AWS_SECRET_ACCESS_KEY="your-secret-access-key"

# The S3 Region and Bucket Name
AWS_REGION="us-east-1"
AWS_S3_BUCKET="your-bucket-name"
```

## Application Settings

```bash
# The name of the application used in UI and metadata
NEXT_PUBLIC_APP_NAME="ApexCRM"
```

## Setup Instructions

### 1. Database Creation
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Create a new project or select existing.
3. Go to the **Storage** tab.
4. Create a new **Postgres** database.
5. Click the `.env.local` tab in the storage dashboard and copy the `POSTGRES_URL`.

### 2. Generate NextAuth Secret
Open your terminal and run:
```bash
openssl rand -base64 32
```
Copy the output and paste it as `NEXTAUTH_SECRET`.

### 3. Configure Email
1. Sign up at [resend.com](https://resend.com).
2. Create an API Key.
3. Verify your sender domain (e.g., `@yourdomain.com`).
4. Copy the API Key to `RESEND_API_KEY`.

### 4. Verify Setup
Once your `.env.local` file is populated, run the development server:
```bash
pnpm dev
```
If the application starts successfully and connects to the database, your environment is configured correctly.