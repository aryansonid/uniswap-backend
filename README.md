# uniswap-backend

## Features

- Express.js server setup
- GraphQL integration with Uniswap
- Environment variable configuration
- Token data fetching endpoint

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/uniswap-backend.git
```
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

## Usage

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
GRAPH_API_URL=<your-graphql-endpoint>
QUERY=<your-graphql-query>
```

## API Endpoints
### GET `/`
- Returns a "Hello World" message
- Used to verify server is running

### GET `/api/tokens`
- Fetches token data from Uniswap's GraphQL API
- Returns JSON response with token information
- Includes error handling for failed requests

## Error Handling

The API includes basic error handling:
- 500 status code for server errors
- Error logging to console
- JSON error responsesx