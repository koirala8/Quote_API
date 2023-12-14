# Quote API Project

This project implements a simple Quote API using Express.js. It provides routes to retrieve random quotes, retrieve quotes based on a person, and add new quotes to the data. The project also includes a basic front-end site to interact with the API.

## Getting Started

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/quote-api.git
   ```

2. Install dependencies.

   ```bash
   cd quote-api
   npm install
   ```

3. Start the server.

   ```bash
   node server.js
   ```

4. Open your browser and navigate to [http://localhost:4001](http://localhost:4001) to interact with the front-end.

## Project Structure

- `server.js`: Main entry point for the Express application.
- `public/index.html`: Front-end HTML file.
- `public/script.js`: Front-end JavaScript file for interacting with the API.

## API Routes

### GET /api/quotes/random

This route returns a random quote from the quotes data.

**Response:**

```json
{
  "quote": {
    "person": "John Doe",
    "text": "This is a random quote."
  }
}
```

### GET /api/quotes

This route returns all quotes from the data if there are no query parameters. If a query parameter `person` is provided, it returns all quotes said by the specified person.

**Response (No Query Parameters):**

```json
{
  "quotes": [
    {
      "person": "Jane Doe",
      "text": "Quote 1"
    },
    {
      "person": "John Smith",
      "text": "Quote 2"
    },
    // ... other quotes
  ]
}
```

**Response (With Query Parameter `person=Jane Doe`):**

```json
{
  "quotes": [
    {
      "person": "Jane Doe",
      "text": "Quote 1"
    }
  ]
}
```

### POST /api/quotes

This route adds new quotes to the data. New quotes should be passed in a query string with two properties: `quote` with the quote text and `person` with the person who is credited with saying the quote.

**Request Example:**

```
POST /api/quotes?quote=New Quote&person=John Doe
```

**Successful Response:**

```json
{
  "message": "Quote added successfully",
  "quote": {
    "person": "John Doe",
    "text": "New Quote"
  }
}
```

**Error Response (Missing Properties):**

```json
{
  "error": "Both 'quote' and 'person' properties are required in the query string."
}
```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. If you encounter any bugs or have suggestions for improvements, please let us know!

## License

This project is licensed under the [MIT License](LICENSE).
