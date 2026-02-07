export const appMapper = () => ({
  app: {
    appUrl: process.env.APP_URL,
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT || "3000", 10),
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION_TIME || "3600s",
  },
});
