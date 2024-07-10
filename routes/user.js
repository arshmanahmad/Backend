import express from 'express';
import * as userService from '../services/user.service'


const userRoutes = express.Router();

userRoutes.post("/",
    catchAsync(userService.getAllUsers)

)