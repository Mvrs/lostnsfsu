require('dotenv').config()

if (process.env.NODE_ENV !== 'production')
	require('dotenv').config({ path: './local.env' })

module.exports = {
	development: {
		client: 'pg',
		connection: {
			user: process.env.POSTGRES_USER,
			database: process.env.POSTGRES_DB,
			password: process.env.POSTGRES_PASSWORD,
		},
		migrations: {
			directory: __dirname + '/migrations',
		},
		seeds: {
			directory: __dirname + '/seeds',
		},
	},
	// production is in the works
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: __dirname + '/migrations',
		},
		seeds: {
			directory: __dirname + '/seeds/production',
		},
	},
}
