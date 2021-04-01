const db = require('../../data/db-config')

async function addUser(user) {
  const { username, password, role, email, user_external_id } = user
  return await db.transaction(async (trx) => {
    const user = await trx('users').insert(
      { username, password, role, user_external_id },
      ['user_id', 'user_external_id as userId', 'username']
    )
    const { user_id, userId } = user[0]
    await trx('emails').insert({ email, user_id })
    return {
      userId,
      username
    }
  })
}

function userExists(user) {
  return db('users as u')
    .select(
      'u.user_id',
      'user_external_id',
      'username',
      'password',
      'role',
      'email'
    )
    .where('username', user)
    .join('emails as e', 'u.user_id', 'e.user_id')
    .first()
}

module.exports = {
  addUser,
  userExists
}
