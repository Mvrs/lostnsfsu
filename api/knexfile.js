if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: './local.env' })

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      database: 'lostinsfsu-api',
      host: 'localhost',
      password: 'postgres'
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },
  // production is in the works
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }
}
