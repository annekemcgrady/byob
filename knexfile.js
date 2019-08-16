// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/authors",
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true,
  },
  seeds: {
    directory: './seeds/dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }

};
