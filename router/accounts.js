const db = require('../data/dbConfig'); // import database
const express = require('express')
const router = express.Router() // import Router





router.get('/', (req, res) => {
    db.select('*')
        .from('accounts')
        .then(rows => {
            res.status(200).json({ data: rows })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.get('/:id', (req, res) => {
    const accountId = req.params.id;

    
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})


module.exports = router;


