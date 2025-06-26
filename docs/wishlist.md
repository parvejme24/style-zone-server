# Wishlist Module API Documentation

## Base URL
`/api/wishlist`

## Endpoints

| Name         | Method | Endpoint         | Description           |
|--------------|--------|------------------|-----------------------|
| List         | GET    | /                | List all wishlist items|
| Add          | POST   | /                | Add to wishlist       |
| Remove       | DELETE | /:id             | Remove from wishlist  |

## Example Requests

### Add
```json
{
  "userId": 1,
  "productId": 2
}
```

## Example Responses

### List
```json
[
  { "id": 1, "userId": 1, "productId": 2 }
]
```

---
[Back to main API documentation](../../README.md) 