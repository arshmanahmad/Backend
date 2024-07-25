import { validateUser } from '../models/user.model.js';
import authService from '../services/auth.service.js'

const register = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    try {
        const { email, password } = req.body;
        const user = await authService(email, password);
        res.status(401).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
const login = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
export default {
    register,
    login
}