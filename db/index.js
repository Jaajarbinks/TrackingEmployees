const mysql = require('mysql2')

// found in lesson 11
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'tracking_db',
  },
  console.log(`Your connected to the database.`),
)

module.exports = db
