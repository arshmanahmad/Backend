import pkg from 'jsonwebtoken';
const { sign } = pkg;
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js'; // Adjust import if needed to align with your project structure

const register = async (email, password) => {
    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    return user;
}

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }
    const token = sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

export default {
    register,
    login
}
