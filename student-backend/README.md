# Student Management Backend

A Node.js backend API for managing student information with CRUD operations.

## Features

- Create, Read, Update, and Delete student records
- MongoDB database integration
- Input validation
- Error handling
- RESTful API endpoints

## API Endpoints

### Students

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a single student
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

### Student Object

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "rollNumber": "S001",
  "age": 20,
  "grade": "A",
  "address": "123 Main St",
  "phone": "+1234567890",
  "dateOfAdmission": "2023-01-15T00:00:00.000Z"
}
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env` file
4. Run the application:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/studentDB
NODE_ENV=development
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

To run the application in production mode:

```bash
npm start
```

The server will run on `http://localhost:5000`