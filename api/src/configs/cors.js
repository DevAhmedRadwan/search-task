const { ORIGINS_WHITELIST } = require("./env");

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || ORIGINS_WHITELIST.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("cors error: " + origin + " not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "Content-Type",
    "Accept",
    "X-Requested-With",
    "Authorization",
  ],
};

module.exports = corsOptions;
