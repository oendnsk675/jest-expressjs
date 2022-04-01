const TaskController = require('../Controllers/task.controller.js')
const {verifyToken} = require('../middlewares/auth.jwt')
const {haveTask} = require('../middlewares/authoriztion')
require('dotenv').config()

module.exports = (express, app, default_router) => {
    const router = express.Router()

    router.get('/tasks', [verifyToken], TaskController.getAllTask)
    router.get('/tasks/:id', [verifyToken], TaskController.getDetailTask)
    router.post('/tasks', [verifyToken], TaskController.createTask)
    router.put('/tasks/:id', [verifyToken, haveTask], TaskController.updateTask)
    router.delete('/tasks/:id', [verifyToken, haveTask], TaskController.deleteTask)


    app.use(default_router, router)
}