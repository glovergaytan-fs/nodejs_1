# Book Inventory API

This API allows you to perform CRUD operations on a book inventory stored in an array. 

## Getting Started

**To run the application locally:**

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository.
3. Install dependencies: `npm install`
4. Start the server: `npm start`

The API will be running at `http://localhost:3001/books`.

## Making Requests

This API is designed to be used with Postman. 

**Base URL:** `http://localhost:3001/books`

**Available endpoints:**

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all books |
| `GET` | `/id/:id` | Get a book by its ID |
| `POST` | `/` | Add a new book |
| `PUT` | `/id/:id` | Update a book by its ID |
| `PUT` | `/title/:title` | Update a book by its title |
| `DELETE` | `/id/:id` | Delete a book by its ID |
| `DELETE` | `/title/:title` | Delete a book by its title |


**Note:** Replace `:id` and `:title` with the actual book ID and title respectively. 

## Examples 

**Get all books:**

GET http://localhost:3001/books


**Get a book by ID:**

GET http://localhost:3001/books/id/1


**Add a new book:**

POST http://localhost:3001/books Content-Type: application/json

{ "title": "The Hitchhiker's Guide to the Galaxy"}


**Update a book by ID:**

PUT http://localhost:3001/books/id/1 Content-Type: application/json

{ "title": "The Restaurant at the End of the Universe"}


**Delete a book by title:**

DELETE http://localhost:3001/books/title/The%Hitchhiker's%Guide%to%the%Galaxy


## Data Format

The API expects and returns JSON data in the following format:

```json
{
  "id": 1,
  "title": "The Hitchhiker's Guide to the Galaxy",
}

Error Handling
The API returns standard HTTP status codes to indicate the success or failure of a request. For example, a 200 OK status code indicates success, while a 404 Not Found status code indicates that the requested resource could not be found.

Notes
The book inventory is stored in memory and will be reset when the server restarts.
The id of a book is currently hard coded from 1-20 and it is set up to be replaced with a more comprehensive dataset.
