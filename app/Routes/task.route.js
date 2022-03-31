const TaskController = require('../Controllers/task.controller.js')
const {verifyToken} = require('../middlewares/auth.jwt')

module.exports = (express, app) => {
    const router = express.Router()

    router.get('/tasks', [verifyToken], TaskController.getAllTask)
    router.get('/tasks/:id', [verifyToken], TaskController.getDetailTask)
    router.post('/tasks', [verifyToken], TaskController.createTask)
    router.put('/tasks/:id', [verifyToken], TaskController.updateTask)
    router.delete('/tasks/:id', [verifyToken], TaskController.deleteTask)

    app.use('/api', router)
}