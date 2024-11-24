const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const users = [
    {id:1, name:'Sakib', email:'sakib@gamil.com'},
    {id:2, name:'Tamim', email:'tamim@gamil.com'},
    {id:3, name:'Mushfiq', email:'mushfiq@gamil.com'}
]

app.get('/', (req, res) => {
  res.send('Hello World Bangladesh!')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})