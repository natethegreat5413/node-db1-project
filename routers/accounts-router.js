const express = require('express')
const db = require('../data/dbConfig')
const { where } = require('../data/dbConfig')
const router = express.Router()

router.get('/', (req,res) => {
    db('accounts')
    .then(account => {
        res.status(200).json({ account })
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('accounts')
    .where({ id })
    .then(ids => {
        res.status(200).json({ ids })
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})

router.post('/', (req, res) => {
    const account = req.body
    db('accounts')
    .insert(account)
    .then(ids => {
        res.status(201).json({ ids })
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('accounts')
    .update(changes)
    .where({ id })
    .then(change => {
        if(change){
            res.status(200).json({change})
        }else if(!change){
            res.status(400).json({ message: 'Could not update!' })
        }
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('accounts')
    .where({ id })
    .del()
    .then(deleted => {
        res.status(200).json({deleted})
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })
})




module.exports = router