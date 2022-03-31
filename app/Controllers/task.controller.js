const {Task, User} = require('../models')

const createTask = async (req, res) => {
    try {
        const data = await Task.create(req.body)
        return res.status(201).json({
            msg: "Success create task",
            data
        })   
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params
        const data = await Task.update(req.body, {
            where: {id}
        })
        return res.status(201).json({
            msg: "Success updated task",
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })   
    }
}

const getAllTask = async (req, res) => {
    try {
        const data = await Task.findAll({
            include: [
                {
                    model: User
                }
            ]
        })
        return res.status(201).json({
            msg: "Success retrieve the task",
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })   
    }
}

const getDetailTask = async (req, res) => {
    try {
        const {id} = req.params
        const data = await Task.findOne({
            where: {id}
        })
        return res.status(201).json({
            msg: "Success retrieve detail task",
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })   
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        const data = await Task.destroy({
            where: {id}
        })

        if (data) {
            return res.status(201).json({
                msg: "Successfully delete task",
                data
            })
        }

        return res.status(404).json({
            msg: "Task not found"
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })   
    }
}

module.exports = {
    getAllTask,
    getDetailTask,
    createTask,
    deleteTask,
    updateTask
}