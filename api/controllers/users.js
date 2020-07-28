const knex = require('../knex');
const hasher = require('../config/hashing');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secret';

module.exports = {
  displayLogin: (req, res) => {
    res.render('/login');
  },
  create: (req, res) => {
    hasher.hash(req.body).then(user => {
      knex('users')
        .insert(
          {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password
          },
          'id'
        )
        .then(results => {
          res.json({
            message: 'Successfully registered, please log in',
            id: results[0]
          });
        })
        .catch(err => {
          res.status(400).send({ message: err });
        });
    });
  },

  login: (req, res) => {
    knex('users')
      .where('email', req.body.email)
      .first()
      .then(user => {
        if (user) {
          hasher.check(user, req.body).then(isMatch => {
            if (isMatch) {
              const token = jwt.sign(user, secret);
              delete user.password;
              res.json({ message: 'Successfully signed in', token, user });
            } else {
              res.status(400).send({ message: 'Invalid Email / Password' });
            }
          });
        } else {
          res.status(400).send({ message: 'Invalid Email / Password' });
        }
      })
      .catch(err => {
        res.status(400).send({ message: 'Invalid Email / Password' });
      });
  },

  verify: (req, res) => {
    res.json(req.decoded); // we can also decode email or password
  }
};
