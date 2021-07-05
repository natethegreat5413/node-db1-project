const express = require("express");
const accountsRouter = require('../router/accounts')

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({ API: 'The API is Running!' })
})

server.use('/api/accounts', accountsRouter)

module.exports = server;
