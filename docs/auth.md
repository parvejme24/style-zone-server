# Auth Module API Documentation

## Base URL
`/api/auth`

## Endpoints

| Name         | Method | Endpoint         | Description           |
|--------------|--------|------------------|-----------------------|
| Login        | POST   | /login           | User login            |
| Register     | POST   | /register        | User registration     |
| Refresh      | POST   | /refresh-token   | Refresh JWT token     |
| Logout       | POST   | /logout          | User logout           |

## Example Requests

### Login
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Register
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "yourpassword"
}
```

## Example Responses

### Login Success
```json
{
  "token": "<jwt_token>",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com"
  }
}
```

---
[Back to main API documentation](../../README.md) 