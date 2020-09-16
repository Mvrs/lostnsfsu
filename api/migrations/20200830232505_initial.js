const Knex = require('knex')
const tableNames = require('../src/constants/tableNames')

function addDefaultColumns(table) {
	table.timestamps(false, true)
	table.datetime('deleted_at')
}

function url(table, columnName) {
	table.string(columnName, 2000)
}

function email(table, columnName) {
	return table.string(columnName, 254)
}

function createNameTable(knex, table_name) {
	return knex.schema.createTable(table_name, table => {
		table.increments().notNullable()
		table.string('name').notNullable().unique()
	})
}

function references(table, tableName) {
	table
		.integer(`${tableName}_id`)
		.unsigned()
		.references('id')
		.inTable(tableName)
		.onDelete('cascade')
}

/**
 *
 * @param {Knex} knex
 */

exports.up = async knex => {
	await Promise.all([
		await knex.schema.createTable(tableNames.user, table => {
			table.increments().notNullable()
			email(table, 'email').notNullable().unique()
			table.string('first_name').notNullable()
			table.string('last_name').notNullable()
			table.string('password', 127).notNullable()
			table.datetime('last_login')
			addDefaultColumns(table)
		}),

		await createNameTable(knex, tableNames.home_type),
		await createNameTable(knex, tableNames.country),
		await createNameTable(knex, tableNames.state),
	])

	await knex.schema.createTable(tableNames.address, table => {
		table.increments().notNullable()
		table.string('steet_address_1', 50).notNullable()
		table.string('street_address_2', 50)
		table.string('city', 50).notNullable()
		table.string('zipcode', 15).notNullable()
		table.float('latitude').notNullable()
		table.float('longitude').notNullable()
		references(table, 'state')
		references(table, 'country')
	})
}

exports.down = async knex => {
	await Promise.all(
		[
			// dropping address first because it references
			// the ones below
			tableNames.address,
			tableNames.user,
			tableNames.home_type,
			tableNames.country,
			tableNames.state,
		].map(tableName => knex.schema.dropTable(tableName)),
	)
}
