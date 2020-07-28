exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', table => {
    table.increments()
    table.string('street_address').notNullable()
    table.string('city').notNullable()
    table.integer('zip_code').notNullable()
    table.text('state').notNullable()
    table.string('image_url').notNullable()
    table.string('home_type').notNullable()
    table.decimal('price', 14, 2)
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index()
    table.string('description').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings')
}
