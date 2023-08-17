module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '346dc3c7ddb7d8ae628579d0bbacffb6'),
    },
  },
});
