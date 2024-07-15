import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import User, { findOne } from '../models/user.model';

const register = async (email, password) => {
    const user = new User({ email, password });
    user.save();
    return user;
}

const login = async (email, password) => {
    const user = await findOne({ email });
    if (!user) {
        throw new Error('invalid email or password');
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
        throw new Error('invalid email or password')
    }
    const token = sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}
export default {
    register,
    login
}