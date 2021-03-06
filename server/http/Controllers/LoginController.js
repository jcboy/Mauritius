const Admin = require("../../models/Admin");
const {emailValidation, passwordValidation} = require("../../validation");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
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
                if (!validPass) return res.status(400).send('Le mot de passe ne correspond pas.')
                const token = jwt.sign({_id: user["_id"]}, process.env.SECRET_TOKEN);
                //res.cookie('token', token, { httpOnly: true });
                res.header("Authorization", "Bearer " + token)
                    .header("Access-Control-Expose-Headers", "Authorization")
                    .send(user);
            }
        } catch (err) {
            return res.send(err);
        }
    }

    async create(req, res) {
        const credentials = req.body;
        const salt = await bcrypt.genSalt(10);
        credentials.password = await bcrypt.hash(credentials.password, salt);
        const admin = new Admin(credentials);
        admin.save().then((response) => {
            res.send(response)
        }).catch((err) => {
            res.status(402).send(err.message)
        })
    }


    async updatePassword(req, res) {
        const {error, value} = passwordValidation({password: req.body.password});
        if (error) return res.status(400).send({error: error.details[0].message});
        else {
            const salt = await bcrypt.genSalt(10);
            value.password = await bcrypt.hash(value.password, salt);
            Admin.findOneAndUpdate({_id: req.body.id}, value,
                {new: true, useFindAndModify: false}, (err, response) => {
                    if (!!err) return res.status(400).send({err, message: "User could not be updated"});
                    else {
                        res.send({message: "Mot de passe actualisé !"});
                    }
                });
        }
    }

    async updateEmail(req, res) {
        const {error, value} = emailValidation({email: req.body.email});
        console.log("BODY", req.body);
        console.log(req.body.email);
        if (error) return res.status(400).send({error: error.details[0].message});
        else {
            Admin.findOneAndUpdate({_id: req.body.id}, value,
                {new: true, useFindAndModify: false}, (err, response) => {
                    if (!!err) return res.send({err, message: "User could not be updated"});
                    else {
                        res.send(response);
                    }
                });
        }
    }

    async getAdminById(req, res) {
        const id = req.params.id;
        console.log(id);
        Admin.find({_id: id}, (error, response) => {
            res.send(response)
        })
    }
}

module.exports = new LoginController();