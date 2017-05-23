const express = require('express')
const webRoutes = require('./web/routes')
const app = express()
const port = process.env.PORT || 4002
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/', express.static('redditApp'))


app.use('/', webRoutes)

app.listen(port, () => console.log('we got you on' + ' ' + port))
