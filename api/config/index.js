module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  PORT: process.env.PORT,
  CONNECTION_STRING:
    process.env.CONNECTION_STRING || "mongodb://localhost:27017/LocalDB",
};
