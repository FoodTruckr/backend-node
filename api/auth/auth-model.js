const db = require('../../data/db-config')

async function newUser(user) {
  return db('users').insert(user, ['user_external_id as userId', 'username'])
}

module.exports = {
  newUser
}
