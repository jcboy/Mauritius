const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) return res.sendStatus(403);
    try {
        req.user = jwt.verify(token, process.env.SECRET_TOKEN);
        next();
    } catch (err) {
        return res.status(401);
    }
}