const express = require("express");

const accountsRouter = require('../routers/accounts-router')

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ API: "IS UP!!"})
})

module.exports = server;
