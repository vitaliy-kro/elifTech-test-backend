
## Routes
 This backend provides two routes: `/products` and `/orders`. Both routes support the `GET` and `POST` methods to retrieve and add data respectively. This readme will guide you through the usage of these routes.

## Base URL

The base URL for accessing the Shop Backend is `https://localhost:4080`. Please replace `localhost:4080.com` with the actual URL where the backend is deployed.

## Products

### Retrieve all products

- **URL**: `/products`
- **Method**: `GET`
- **Description**: This endpoint allows you to retrieve all products available in the shop.
- **Response**: The response will be a JSON array containing all the products. Example: 

```json
[
    {
        "title": "Mo-burger 3",
        "shop": "Mc-Donny",
        "price": 300,
        "imageURL": "https://picsum.photos/200",
        "createdAt": "2023-05-24T12:15:59.308Z",
        "updatedAt": "2023-05-24T12:15:59.308Z",
        "id": "646dffff5b01a22e94591803"
    },
    {
        "title": "Mo-burger 2",
        "shop": "Mc-Donny",
        "price": 300,
        "imageURL": "https://picsum.photos/200",
        "createdAt": "2023-05-24T12:15:54.144Z",
        "updatedAt": "2023-05-24T12:15:54.144Z",
        "id": "646dfffa5b01a22e94591801"
    }
]
```

### Add a new product

- **URL**: `/products`
- **Method**: `POST`
- **Description**: This endpoint allows you to add a new product to the shop.
- **Request Body**: The request body should be a JSON object representing the new product. Example: 

```json
{
        "title": "Mo-burger",
        "shop": "Mc-Donny",
        "price": 300,
        "imageURL": "https://picsum.photos/200",
        "createdAt": "2023-05-24T12:15:48.160Z",
        "updatedAt": "2023-05-24T12:15:48.160Z",
        "id": "646dfff45b01a22e945917ff"
    }
```

## Orders

### Retrieve all orders

- **URL**: `/orders`
- **Method**: `GET`
- **Description**: This endpoint allows you to retrieve all orders placed in the shop.
- **Response**: The response will be a JSON array containing all the orders. Order example: 
```json
[{
    "name": "frby",
    "email": "frby@mail.com",
    "phone": "+380782801299",
    "products": [
        {
            "id": "1",
            "imageURL": "https://picsum.photos/200",
            "price": 300,
            "quantity": 4,
            "title": "Mo-burger 3",
            "total": 1500,
            "_id": "646f44207b0960b5f75cca82"
        },
        {
            "id": "2",
            "imageURL": "https://picsum.photos/200",
            "price": 200,
            "quantity": 4,
            "title": "Mo-burger 2",
            "total": 800,
            "_id": "646f44207b0960b5f75cca83"
        }
    ],
    "totalPrice": 2300,
    "createdAt": "2023-05-25T11:18:56.185Z",
    "updatedAt": "2023-05-25T11:18:56.185Z",
    "id": "646f44207b0960b5f75cca81"
}]
```

### Add a new order

- **URL**: `/orders`
- **Method**: `POST`
- **Description**: This endpoint allows you to add a new order to the shop.
- **Request Body**: The request body should be a JSON object representing the new order. Example: 

```json
{
    "name": "frby",
    "email": "frby@mail.com",
    "phone": "+380782801299",
    "products": [
        {
            "id": "1",
            "imageURL": "https://picsum.photos/200",
            "price": 300,
            "quantity": 4,
            "title": "Mo-burger 3",
            "total": 1500,
            "_id": "646f44207b0960b5f75cca82"
        },
        {
            "id": "2",
            "imageURL": "https://picsum.photos/200",
            "price": 200,
            "quantity": 4,
            "title": "Mo-burger 2",
            "total": 800,
            "_id": "646f44207b0960b5f75cca83"
        }
    ],
    "totalPrice": 2300,
    "createdAt": "2023-05-25T11:18:56.185Z",
    "updatedAt": "2023-05-25T11:18:56.185Z",
    "id": "646f44207b0960b5f75cca81"
}
```

## Error Handling

In case of any errors, the backend will return appropriate HTTP status codes along with error messages in the response body. Please refer to the HTTP status codes and error messages to handle potential issues gracefully.

That's all you need to know to get started with the Delivery Backend! Happy shopping!
