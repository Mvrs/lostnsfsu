/* SETUP HERE
// ---------------
// This section will setup all dependencies and variables required to run the server.
*/

// Express
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000
const passport = require('passport')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs')

const corsWhiteLIst = ['http:localhost:3000', 'real_domain_n']

let corsOptions = {
  origin: function (origin, callback) {
    if (corsWhiteLIst.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
}

const routes_setter = require('./config/routes.js')
routes_setter(app)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
