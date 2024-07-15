// routes/auth.routes.js
import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import authenticateToken from '../middleware/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route.');
});

export default router;
