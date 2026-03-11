# Changelog

All notable changes to the ApexCRM project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-05-20

### Added
- **User Authentication Module**
  - NextAuth.js v5 integration.
  - Email/Password credential provider.
  - Session management with secure HTTP-only cookies.
  - Password reset flow via email.
- **Admin Dashboard Module**
  - Secure admin-only routes.
  - User management interface (View, Edit, Delete, Suspend).
  - System overview metrics card.
  - Activity log table.
- **UI/UX Design System**
  - Implementation of "Apex" design theme using Tailwind CSS.
  - Responsive sidebar navigation with mobile collapse.
  - Dark/Light mode support (System default).
  - Custom data tables with pagination and sorting.
- **Database Architecture**
  - Drizzle ORM configuration with PostgreSQL.
  - Migrations for `users`, `accounts`, `sessions`, `items`, and `audit_logs`.
  - Indexes for optimized query performance.
- **File Uploads Module**
  - Integration with AWS S3 compatible storage.
  - Image validation and resizing logic.
  - Admin file browser.
- **Email Notifications**
  - Resend integration for transactional emails.
  - Templates: Welcome Email, Password Reset, Admin Alerts.
- **Security**
  - Rate limiting on API routes.
  - CSRF protection via NextAuth.
  - Input sanitization and Zod schema validation.
  - Role-based access control (RBAC) middleware.

### Changed
- Initial project scaffold generated using Next.js 14 App Router.
- Configured TypeScript strict mode.

### Security
- Enforced `secure: true` flag on cookies in production.
- Added CORS headers for API routes.

---

## [Unreleased]
### Planned
- Advanced analytics charting (Recharts integration).
- CSV export for all data tables.
- User profile avatar customization.