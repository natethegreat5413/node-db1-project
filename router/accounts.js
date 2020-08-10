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

    db('accounts')
    .where({ id: accountId })
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})

router.post('/', (req, res) => {
    const account = req.body;

    db('accounts')
        .insert(account)
        .returning('id')
        .then(ids => {
            res.status(201).json({ inserted: ids })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.put('/:id', (req, res) => {
    const changes = req.body;
    const accoundId = req.params.id;

    db('accounts')
    .where({ id: accoundId })
    .update(changes)
    .then(count => {
        if(count){
            res.status(200).json({ message: 'updated successfully' })
        }else{
            res.status(404).json({ message: 'not found' })
        }
    })
    
})

router.delete('/:id', (req, res) => {
    const accoundId = req.params.id;

    db('accounts')
    .where({ id: accoundId })
    .del()
    .then(account => {
        if(acccount){
            res.status(200).json({ message: 'removed successfully' })
        }else{
            res.status(404).json({ message: 'request not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})


module.exports = router;


