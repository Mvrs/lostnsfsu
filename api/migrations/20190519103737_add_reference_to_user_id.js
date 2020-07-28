exports.up = function(knex, Promise) {
  // return knex.schema.table('listings', column => {
  //   column.integer('user_id').notNull()
  //   // .notNullable()
  //   // .unsigned()
  //   // .notNullable()
  //   // // .defaultTo(0)
  //   // .references('id')
  //   // .inTable('users')
  //   // .onDelete('CASCADE')
  //   // .index()
  // })
}

exports.down = function(knex, Promise) {
  // return knex.schema.table('listings', table => {
  //   table.dropColumn('user_id')
  // })
}
