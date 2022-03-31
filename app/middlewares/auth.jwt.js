const jwt = require('jsonwebtoken')
require('dotenv').config()
const key = process.env.JWT_KEY

module.exports = {
    verifyToken: (req, res, next) => {
        let token = req.headers['x-api-key']

        if (!token) {
            return res.status(403).send({
                msg: `No token provided!`
            })
        }

        jwt.verify(token, key, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    msg: `Unauthorized!`
                })
            }
            req.userId = decoded.id
            next()
        })

    }
}