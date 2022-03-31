const UserController = require('../Controllers/user.controller.js')
const {verifyToken} = require('../middlewares/auth.jwt')

module.exports = (express, app) => {
    const router = express.Router()

    // auth
    router.post('/signup', UserController.signUp)
    router.post('/signin', UserController.signIn)


    router.get('/users', [verifyToken], UserController.getAllUser)
    router.get('/users/:id', [verifyToken], UserController.getDetailUser)
    router.put('/users/:id', [verifyToken], UserController.updateUser)

    app.use('/api', router)
}