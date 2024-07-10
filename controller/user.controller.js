// controllers/user.controller.js

const userService = require('../services/user.service');

// Create user
const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get user by ID
const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL params
        const user = await userService.getUser(userId);
        res.status(200).json(user);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Update user
const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL params
        const updatedUser = await userService.updateUser(userId, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Delete user
const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL params
        const deletedUser = await userService.deleteUser(userId);
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
