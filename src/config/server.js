const bodyParser = require('body-parser')
const express = require('express')

const PORT = 3003
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(PORT, function() {
    console.log(`Backend is running on port ${PORT}`)
})

module.exports = server