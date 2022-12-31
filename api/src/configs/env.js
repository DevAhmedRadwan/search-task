module.exports = {
  NODE_ENV: String(process.env.NODE_ENV),
  PORT: parseInt(process.env.PORT),
  MONGODB_URI: String(process.env.MONGODB_URI),
  ORIGINS_WHITELIST: process.env.ORIGINS_WHITELIST.split(","),
};
