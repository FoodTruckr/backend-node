const db = require('../../data/db-config')

async function userExists(username) {
try {
  return await db('users').where('username', username)
} catch (err) {
  next (err)
}
}


module.exports {

}
