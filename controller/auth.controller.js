import { User, validateUser } from '../models/user.model';
const authService = require('../services/auth.service')

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
module.exports = {
    register,
    login
}