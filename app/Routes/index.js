module.exports = (express, app) => {
    require('./user.route')(express, app)
    require('./task.route')(express, app)
}