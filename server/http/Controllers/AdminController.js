const Admin = require("../../models/Admin");

class AdminController {

    signIn(req, res) {
        Admin.find(req.body, (err, response) => {
            res.send(response);
        })
    }

    update(req, res) {
        const admin = new Admin(req.body);
        admin.save().then((data) => {
            res.send(data)
        }).catch((err) => {
            res.statusCode(500).send(err.message)
        });
    }
}

module.exports = new AdminController();