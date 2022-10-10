module.exports = {
  appPort: process.env.PORT,
  appHost: process.env.APP_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  postgressHost: process.env.POSTGRES_DB_HOST,
  postgressPort: process.env.POSTGRES_DB_PORT,
};