const express = require('express')
const mysql = require('mysql2')

// making express app

// creating the port to listen to
const PORT = process.env.PORT || 3001
const app = express()

// makes it so you can see the node process
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// found in lesson 11
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tracking_db',
  },
  console.log(`your connected to the database.`),
)

// this to to go into the database to use for the node part
// db.query('Select * from ', function (err, results) {
//   console.log(results)
// })

// err for the request if any
app.use((req, res) => {
  res.status(404).end()
})

app
  //   // this is to add to the db
  .post('./api/departments', ({ body }, res) => {
    const sql = `INSERT INTO tracker (department_name)
    VALUES (?)`
    const params = [body.department_name]

    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message })
        return
      }
      res.json({
        message: 'success',
        data: body,
      })
    })
  })
  //   // this is to make the db
  .get('/api/department', (req, res) => {
    const sql = `SELECT id, department_name AS position FROM departments`

    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message })
        return
      }
      res.json({
        message: 'success',
        data: rows,
      })
    })
  })
//   // this is to delete what i want
//   .delete('', (req, res) => {
// const sql = `DELETE FROM department WHERE id = ?`;
// const params = [req.params.id];
// db.query(sql, params, (err, result) => {
//   if (err) {
//     res.statusMessage(400).json({ error: res.message });
//   } else if (!result.affectedRows){
// res.json({
// message: 'department not found',
// })
//  } else{
//   res.json({
//     messaage: 'delete',
//     change: result.affectedRows,
//     id: req.params.id,
//   })
//  }
// })
// })
//   // this is for updating
//   .put('', (req, res) => {})

app.listen(PORT, () => {
  console.log(`listening now on: ${PORT}`)
})
