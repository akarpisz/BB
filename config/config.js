module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "mysql://pb5lra4hpxpj81gi:l6ds12qrfkqbeapy@e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/d5dx0lyhlk353lio"
  }
}
