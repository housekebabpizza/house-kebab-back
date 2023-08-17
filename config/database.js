// if mongodb 
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: env('DATABASE_URL'),
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });

// if postgres Database
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT', 'postgres'),
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', undefined),
        password: env('DATABASE_PASSWORD', undefined),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL', false),
        },
      },
      options: {},
    },
  },
});




