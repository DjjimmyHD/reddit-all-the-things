const express = require('express')
const webRoutes = require('./web/routes')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())




app.use('/api/posts', webRoutes)


// app.use('/', webRoutes)

app.listen(port, () => console.log('we got you on' + ' ' + port))
