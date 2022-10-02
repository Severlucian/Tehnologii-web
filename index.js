const express = require("express")
const req = require("express/lib/request")

const app = express()

app.get('/ping', (req, res) => {
    res.send('Pong')
})
app.get('/color', (req, res) => {
    res.send('Predong')
})

app.listen(8080)


