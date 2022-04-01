const {Task, User} = require('../models')
const { Op } = require('@sequelize/core')

const haveTask = (req, res, next) => {
    Task.findOne({
        where: {
            [Op.and]: [
                {userId: req.userId},
                {id: req.params.id},
            ]
        }
    }).then(result => {
        // console.log(result);
        if (result) {
            next()
            return
        }
        return res.status(401).send({
            msg: `Unauthorized!`
        })
    })
}

module.exports = {
    haveTask
}