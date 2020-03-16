const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select("*").from("posts")
    .then(rows => {
        res.status(200).json({data : rows})
    })
    .catch(error => {
        res.status(500).json({"error": error})
    })
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;