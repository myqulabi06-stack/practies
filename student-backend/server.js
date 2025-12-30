const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const studentRoutes = require('./routes/students');

// Routes
app.use('/api/students', studentRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Student Management Backend API' });
});

// Middleware for handling 404 errors
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

module.exports = app;