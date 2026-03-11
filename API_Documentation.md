# ApexCRM API Documentation

This document outlines the internal API endpoints available in the application. All API routes are prefixed with `/api`.

## Authentication
Most endpoints require a valid session cookie. Authentication is handled via NextAuth.js.

## Base URL
`https://your-domain.com/api`

---

## Endpoints

### Authentication

#### `POST /api/auth/signin`
Initiates a sign-in request.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:** `204 No Content` on success, sets the session cookie.

**Error:** `401 Unauthorized` if credentials are invalid.

#### `POST /api/auth/signout`
Clears the user session.

**Response:** `204 No Content`.

---

### Users

#### `GET /api/users`
Retrieves a list of users. Requires `ADMIN` role.

**Query Parameters:**
- `page` (number, optional): Page number for pagination.
- `limit` (number, optional): Number of items per page.
- `search` (string, optional): Filter by name or email.

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "usr_123456",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER",
      "createdAt": "2024-05-20T10:00:00Z",
      "image": null
    }
  ],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10
  }
}
```

#### `GET /api/users/me`
Retrieves the currently logged-in user's profile.

**Response:** `200 OK`
```json
{
  "id": "usr_123456",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "USER"
}
```

#### `PUT /api/users/:id`
Updates a user's details. Requires `ADMIN` role or ownership.

**Request Body:**
```json
{
  "name": "John Updated",
  "role": "ADMIN"
}
```

**Response:** `200 OK` with updated user object.

---

### Data / Entities

#### `GET /api/items`
Retrieves a list of core business items (e.g., Products, Bookings, depending on configuration).

**Headers:** `Content-Type: application/json`

**Response:** `200 OK`
```json
{
  "items": [
    {
      "id": "item_001",
      "title": "Sample Item",
      "status": "ACTIVE",
      "value": 1500,
      "updatedAt": "2024-05-21T14:30:00Z"
    }
  ]
}
```

#### `POST /api/items`
Creates a new item. Requires appropriate role permissions.

**Request Body:**
```json
{
  "title": "New Item",
  "status": "DRAFT",
  "value": 2000
}
```

**Response:** `201 Created`
```json
{
  "id": "item_002",
  "message": "Item created successfully"
}
```

#### `DELETE /api/items/:id`
Deletes an item permanently.

**Response:** `204 No Content`

---

### File Uploads

#### `POST /api/upload`
Uploads a file to S3-compatible storage.

**Request:** `multipart/form-data`
- `file`: The file binary.

**Response:** `200 OK`
```json
{
  "url": "https://s3.bucket-name/path/to/file.png",
  "key": "uploads/file.png",
  "size": 102400
}
```

---

## Error Responses

All endpoints may return standard error shapes.

**400 Bad Request**
```json
{
  "error": "Validation Error",
  "details": [
    { "field": "email", "message": "Invalid email format" }
  ]
}
```

**401 Unauthorized**
```json
{
  "error": "Unauthorized",
  "message": "You must be logged in to access this resource."
}
```

**403 Forbidden**
```json
{
  "error": "Forbidden",
  "message": "You do not have permission to perform this action."
}
```

**500 Internal Server Error**
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred."
}
```

---

## Rate Limiting
API endpoints are protected by rate limiting to prevent abuse. Standard limits are set to 100 requests per minute per IP address. Exceeding this limit will result in a `429 Too Many Requests` response.