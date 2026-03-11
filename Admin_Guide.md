# ApexCRM Admin Guide

This guide is for system administrators managing the ApexCRM application.

## Accessing the Admin Panel
1. Navigate to `/dashboard`.
2. Log in with an account that has the `ADMIN` role.
3. The "Admin Panel" link will be visible in the sidebar navigation.

## User Management

### Viewing Users
The main Admin Dashboard displays a list of all registered users. You can view:
- Name and Email
- Role (User, Admin, Moderator)
- Account Status (Active, Inactive)
- Date Joined

### Editing Users
1. Click the "Actions" menu (three dots) next to a user.
2. Select "Edit User".
3. You can modify the user's name, email, and role.
4. Click "Save Changes" to update.

### Roles & Permissions
- **ADMIN:** Full access to all system features, user management, and settings.
- **MODERATOR:** Access to content management but restricted from user management.
- **USER:** Standard access to personal dashboard and allowed features.

### Deactivating Users
To restrict access without deleting data:
1. Go to the specific user profile.
2. Toggle the "Active" status switch to "Off".
3. The user will no longer be able to sign in.

## Content & Data Management

### Dashboard Metrics
The top of the admin panel displays key performance indicators:
- **Total Users:** Count of active user accounts.
- **New Signups (7d):** Number of users registered in the last 7 days.
- **Active Items:** Count of current business records in the database.

### Managing Data Records
Access specific data entities (e.g., Items, Bookings) via the sidebar.
- **Filtering:** Use the search bar to find records by name or ID.
- **Export:** Use the "Export CSV" button to download table data for external analysis.

## Settings & Configuration

### General Settings
Located in `/admin/settings`.
- **Application Name:** Update the brand name displayed in the browser tab and header.
- **Maintenance Mode:** Toggle to disable public access while performing updates.

### Email Configuration
Transactional emails are routed via Resend. To update the sender address:
1. Go to `/admin/settings/integrations`.
2. Update the "From Email" field.
3. Ensure the domain is verified in your Resend dashboard.

## Backup and Recovery

### Automated Backups
If hosted on Vercel Postgres, database backups are automated. Vercel retains:
- 7 days of daily backups (Pro plan).
- Point-in-time recovery up to 60 days (Enterprise plan).

### Manual Export
To export a full SQL dump:
1. Access your Vercel Postgres dashboard.
2. Select the project database.
3. Click "Export" and choose the date/time.
4. Download the `.sql` file.

### Restore Procedure
*Warning: Restoring a backup overwrites current data.*
1. Go to the Vercel Postgres dashboard.
2. Click "Restore".
3. Select the backup file or timestamp.
4. Confirm restoration. The application may experience downtime during this process.

## Security Checklist
- [ ] Require 2FA for all Admin users (if enabled).
- [ ] Review active user list monthly.
- [ ] Rotate `NEXTAUTH_SECRET` every 90 days.
- [ ] Ensure all Admin accounts use strong passwords.

## Troubleshooting

### Users unable to login
1. Check if the user is marked as "Active" in the database.
2. Verify the `NEXTAUTH_URL` in your environment variables matches the live domain exactly.

### Emails not sending
1. Check the `RESEND_API_KEY` environment variable.
2. Verify domain DNS records (TXT/CNAME) in Resend.

### Slow dashboard performance
1. Check Vercel Postgres "Compute" usage. Upgrade if throttling is occurring.
2. Review database indexes on large tables.