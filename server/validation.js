const Joi = require("joi");

const loginValidation = (data) => {
    const userSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).max(72).required()
    })
    return userSchema.validate(data)
}

const passwordValidation = (data) => {
    const passwordSchema = Joi.object({
        password: Joi.string().min(6).max(72).required()
    })
    return passwordSchema.validate(data);
}

const emailValidation = (data) => {
    const emailSchema = Joi.object({
        email: Joi.string().min(6).required().email()
    })
    return emailSchema.validate(data);
}

module.exports = {
    loginValidation,
    passwordValidation,
    emailValidation
}