const app = require('./server');
const connectDB = require('./db');

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;