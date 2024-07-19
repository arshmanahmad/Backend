// controllers/user.controller.js

import { createUser as _createUser, getAllUsers as _getAllUsers, getUser, updateUser as _updateUser, deleteUser as _deleteUser } from '../services/user.service';

// Create user
const createUser = async (req, res, next) => {
    try {
        const user = await _createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await _getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get user by ID
const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL params
        const user = await getUser(userId);
        res.status(200).json(user);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Update user
const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL params
        const updatedUser = await _updateUser(userId, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Delete user
const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL params
        const deletedUser = await _deleteUser(userId);
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
