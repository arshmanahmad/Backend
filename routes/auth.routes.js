// routes/auth.routes.js
import { Router } from 'express';
import auth from '../controller/auth.controller.js'
import authenticateToken from '../middlewares/auth.middleware.js';
const { register, login } = auth
const router = Router();

router.post('/register', register);
router.post('/login', login);

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route.');
});

export default router;
