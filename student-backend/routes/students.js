const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// @desc    Get all students
// @route   GET /api/students
// @access  Public
router.get('/', async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: `No student with the id of ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

// @desc    Create new student
// @route   POST /api/students
// @access  Public
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            data: student
        });
    } catch (error) {
        // Handle duplicate key errors
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Duplicate field value entered'
            });
        }

        res.status(400).json({
            success: false,
            message: 'Bad Request',
            error: error.message
        });
    }
});

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Public
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: `No student with the id of ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        // Handle duplicate key errors
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Duplicate field value entered'
            });
        }

        res.status(400).json({
            success: false,
            message: 'Bad Request',
            error: error.message
        });
    }
});

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Public
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: `No student with the id of ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

module.exports = router;