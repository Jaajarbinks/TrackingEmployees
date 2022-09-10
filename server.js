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
    password: 'Bulldozer1!',
    database: 'tracking_db',
  },
  console.log(`Your connected to the database.`),
)

// this to to go into the database to use for the node part
// db.query('Select * from ', function (err, results) {
//   console.log(results)
// })

// err for the request if any
app.use((req, res) => {
  res.status(404).end()
})

//   // this is to add to the db
app
  .get('/api/departments', (req, res) => {
    db.query('SELECT * FROM departments', (req, res) => {
      if (err) {
        console.error(err)
        res.send(err)
      }
      res.json(result)
    })

    // db.query(sql, (err, rows) => {
    //   if (err) {
    //     res.status(500).json({ error: err.message })
    //     return
    //   }
    //   res.json({
    //     result,
    //   })
    // })
  })

  // .get('/api/roles', (req, res) => {
  //   db.query('SELECT * FROM roles', (req, res) => {
  //     if (err) {
  //       console.error(err)
  //       res.send(err)
  //     }
  //     res.json(result)
  //   })

  //   db.query(sql, (err, rows) => {
  //     if (err) {
  //       res.status(500).json({ error: err.message })
  //       return
  //     }
  //     res.json({
  //       message: 'success',
  //       data: rows,
  //     })
  //   })
  // })

  // .get('/api/employees', (req, res) => {
  //   db.query('SELECT * FROM employees', (req, res) => {
  //     if (err) {
  //       console.error(err)
  //       res.send(err)
  //     }
  //     res.json(result)
  //   })

  //   db.query(sql, (err, rows) => {
  //     if (err) {
  //       res.status(500).json({ error: err.message })
  //       return
  //     }
  //     res.json({
  //       message: 'success',
  //       data: rows,
  //     })
  //   })
  // })

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
