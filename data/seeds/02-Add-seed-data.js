exports.seed = async function (knex) {
  await knex('users').insert([
    {
      user_external_id: 'a8Um',
      username: 'Batman',
      password: 'batman123',
      role: 'operator'
    },
    {
      user_external_id: 'cg9Um',
      username: 'Robin',
      password: 'robin123',
      role: 'client'
    }
  ])
  await knex('emails').insert([
    {
      email: 'batman@batman.com',
      user_id: 1
    },
    {
      email: 'robin@batman.com',
      user_id: 2
    }
  ])
}
