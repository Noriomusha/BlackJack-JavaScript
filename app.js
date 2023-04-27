const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'images')))
app.use(express.static(path.join(__dirname, 'public', 'images')))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)})    