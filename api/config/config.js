require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.S3_BUCKET,
    "password": process.env.SECRET_KEY,
    "database": "escola_ingles",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}

