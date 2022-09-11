const express = require('express')
const db = require('./db')
// making express app

// creating the port to listen to
const PORT = process.env.PORT || 3001
const app = express()

// makes it so you can see the node process
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`listening now on: ${PORT}`)
})
