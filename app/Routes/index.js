module.exports = (express, app, default_router) => {
    require('./user.route')(express, app, default_router)
    require('./task.route')(express, app, default_router)
}