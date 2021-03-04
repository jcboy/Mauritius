const Admin = require("../../models/Admin");
const {loginValidation, emailValidation} = require("../../validation");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {passwordValidation} = require("../../validation");
dotenv.config();

class LoginController {

    async login(req, res) {
        const email = {email: req.body.email};
        const {error} = emailValidation(email);
        if (error) return res.status(400).send(error.details[0].message);

        try {
            const user = await Admin.findOne(email);
            if (!user) return res.status(400).send({message: "EmailList introuvable"});
            else {
                const validPass = await bcrypt.compare(req.body.password, user["password"]);
                if (!validPass) return res.send('Le mot de passe ne correspond pas.')
                const token = jwt.sign({_id: user["_id"]}, process.env.SECRET_TOKEN);
                //res.cookie('token', token, { httpOnly: true });
                res.header("Authorization", "Bearer " + token)
                    .header("Access-Control-Expose-Headers", "Authorization")
                    .send(user);
            }
        } catch (err) {
            return res.send({statut: "error", message: err.message});
        }
    }

    async updatePassword(req, res) {
        const {error, value} = passwordValidation(req.body);
        if (error) return res.status(400).send({error: error.details[0].message, message: "Invalid password"});
        else {
            const salt = await bcrypt.genSalt(10);
            value.password = await bcrypt.hash(value.password, salt);
            Admin.findByIdAndUpdate({_id: req.params.id}, value,
                {new: true, useFindAndModify: false}, (err, response) => {
                    if (!!err) return res.send({err, message: "User could not be updated"});
                    else {
                        res.send({response, message: "Mot de passe actualisé !"});
                    }
                });
        }
    }
}

module.exports = new LoginController();