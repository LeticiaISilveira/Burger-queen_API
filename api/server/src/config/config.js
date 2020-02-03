module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "burgerQueenDevelopment",
    "host": "172.21.0.2",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "burgerQueenTest",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "burgerQueenProduction",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}