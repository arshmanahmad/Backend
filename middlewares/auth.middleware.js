// middleware/auth.middleware.js
import { verify } from 'jsonwebtoken';
import { findById } from '../models/user.model';

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        const user = await findById(decoded._id);
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
