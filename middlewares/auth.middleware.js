import pkg from 'jsonwebtoken';
const { verify } = pkg;
import User from '../models/user.model.js'; // Adjust import if needed to align with your project structure

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id); // Adjust if needed to align with your project structure
        if (!user) {
            return res.status(401).send('Invalid token.');
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send('Invalid token.');
    }
};

export default authenticateToken;
