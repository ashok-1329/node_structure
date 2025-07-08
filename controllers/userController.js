const User = require('../models/userModel');
const ErrorResponse = require('../utils/ErrorResponse'); // if using custom ErrorResponse

// Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        next(error); // passes to global error handler
    }
};

// Get a single user by ID
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.getUserById(req.params.id);
        if (!user) {
            return next(new ErrorResponse('User not found', 404)); // clean 404 handling
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};

// Create a new user
exports.createUser = async (req, res, next) => {
    //res.json(req.body);
    
    try {
        const { name, email, phone, age, address } = req.body;

        if (!name || !email) {
            return next(new ErrorResponse('Name and email are required', 400));
        }

        const userId = await User.createUser({ name, email, phone, age, address });

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            userId
        });
    } catch (error) {
        next(error);
    }
};
