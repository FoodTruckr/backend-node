module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'SecretPassword',
  ROUNDS: Number(process.env.BCRYPT_ROUNDS) || 10
}
