const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    rollNumber: {
        type: String,
        required: [true, 'Roll number is required'],
        unique: true,
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age must be at least 1'],
        max: [100, 'Age cannot exceed 100']
    },
    grade: {
        type: String,
        required: [true, 'Grade is required'],
        trim: true,
        maxlength: [10, 'Grade cannot be more than 10 characters']
    },
    address: {
        type: String,
        trim: true,
        maxlength: [200, 'Address cannot be more than 200 characters']
    },
    phone: {
        type: String,
        trim: true,
        match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
    },
    dateOfAdmission: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Index for better search performance
studentSchema.index({ email: 1 });
studentSchema.index({ rollNumber: 1 });

module.exports = mongoose.model('Student', studentSchema);