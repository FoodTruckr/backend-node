exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_external_id', 10).notNullable().unique().index()
      users.string('username', 255).notNullable().unique()
      users.string('password', 255).notNullable()
      users.string('role', 20).notNullable()
      users.timestamps(false, true)
    })
    .createTable('emails', (emails) => {
      emails.increments('email_id')
      emails.string('email', 255).notNullable()
      emails
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    })
    .createTable('trucks', (trucks) => {
      trucks.increments('truck_id')
      trucks.string('truck_external_id', 255).notNullable().unique().index()
      trucks
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      trucks.decimal('truck_latitude', null, 20)
      trucks.decimal('truck_longitude', null, 20)
      trucks.string('address', 255)
      trucks.string('city', 255)
      trucks.string('state', 2)
      trucks.integer('zip_code',5)
      trucks.date('arrival_date')
      trucks.time('arrival_time')
      trucks.date('departure_date')
      trucks.time('departure_time')
      trucks.timestamps(false, true)

    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('trucks')
  await knex.schema.dropTableIfExists('emails')
  await knex.schema.dropTableIfExists('users')
}
