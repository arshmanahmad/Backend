import User, { find, findById, findByIdAndDelete } from "../models/user.model";


//create new user
const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error("Error creating user" + error.message);
    }
};

// get all users
const getAllUsers = async () => {
    try {
        const users = find();
        return users;
    } catch (error) {
        throw new Error("Error getting users:" + error.message)
    }
}

// get user by id 
const getUser = async (userId) => {
    try {
        const user = await findById(userId);
        if (!user) {
            throw new Error("user not found");
        }
        return user
    } catch (error) {
        throw new Error("Error getting user" + error.message);
    }
}

// update user 
const updateUser = async (userId, userData) => {
    try {
        const user = await findByIdAndDelete(userId, userData, { new: true });
        if (!user) {
            throw new Error("User not found");
        }
        return user
    } catch (error) {
        throw new Error("Error updating user" + error.message);
    }
}

// delete user
const deleteUser = async (userId) => {
    try {
        const user = await findByIdAndDelete(userId);
        if (!user) {
            throw new Error("user not found");
        }
        return user;
    } catch (error) {
        throw new Error("Error deleting user" + error.message);
    }

}

export default {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}