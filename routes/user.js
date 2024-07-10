import express from 'express';
import * as userService from '../services/user.service'


const userRoutes = express.Router();

const catchAsync = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

//create user
userRoutes.post("/", catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user)
}))

// get All users

userRoutes.get("/", catchAsync(async (req, res) => {
    const user = await userService.getAllUsers(req.body);
    res.status(200).json(user)
}))

// get user by id

userRoutes.get("/", catchAsync(async (req, res) => {
    const user = await userService.getUser(req.body);
    res.status(200).json(user)
}))