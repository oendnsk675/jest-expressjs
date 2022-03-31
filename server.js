const app = require('./app')
require('dotenv').config()
const {PORT, APP_URL} = process.env
app.listen(PORT, ()=> {
    console.log(`server is running on ${APP_URL}:${PORT}`);
})