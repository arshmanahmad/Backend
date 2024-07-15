const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const register = async (email, password) => {
    const user = new User({ email, password });
    user.save();
    return user;
}

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('invalid email or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('invalid email or password')
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}
module.exports = {
    register,
    login
}