const listings = require('../controllers/listings')
const users = require('../controllers/users')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
const secret = process.env.JWT_SECRET || 'secret'

function verifyToken(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['token']

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.status(401).send({
          message:
            'You are not authorized to view that resource, Please log in to continue.'
        })
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded
        next()
      }
    })
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      message:
        'You are not authorized to view that resource, Please log in to continue.'
    })
  }
}

module.exports = app => {
  app.post('/users', users.create)
  app.post('/login', users.login)
  app.use(verifyToken)
  app.get('/user', users.verify)
  app.get('/listings', listings.index)
  app.get('/listings/user/:id', listings.grabListingFromUser)
  app.get('/listings/:id', listings.grabListing)
  app.get('/listingSearch/:search', listings.searchListing)
  app.post('/listings', listings.createListing)
  app.patch('/listings/:id', listings.updateListing)
  app.delete('/listings/:id', listings.deleteListing)
}
