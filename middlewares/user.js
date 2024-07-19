const jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const decryptToken = (encryptToken) => {
    const bytes = CryptoJS.AES.decrypt(encryptToken, process.env.ENCRYPTION_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8)

}
const authentication = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '');
        const decoded = jwt.verify(token, process.env.JWT__SECRET);
        const user = await user.findOne({ _id: decoded._id, "tokens.token": token });

        if (!user) {
            throw new error;
        }

        req.token = token;
        req.user = user;
        next()


    } catch (e) {
        res.status(401).send({ error: "Please Authenticate" });
    }
    // asdas
}
const checkAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).send({ error: "Access denied, Admins only" });
    }
    next();
}
export default {
    authentication,
    checkAdmin
}