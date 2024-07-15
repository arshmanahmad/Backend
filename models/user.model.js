import mongoose from "mongoose"
const Joi = require('joi')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

// Joi validation schema for user
const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })
    return schema.validate(user)
}

const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    validateUser
}