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
  }

};
