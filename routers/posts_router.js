const express = require('express');
const router = express.Router();
const posts = require('../data/posts_data')

// Index (cRud)
router.get('/', (req, res) => {
    res.json(posts)
});

// Show (cRud)
router.get('/:id', (req, res) => {
    res.send(`You requested to SHOW the post with id: ${req.params.id}`)
});

// Store (Crud)
router.post('/', (req, res) => {
    res.send(`You requested to CREATE a new post`)
});

// Update (crUd)
router.put('/:id', (req, res) => {
    res.send(`You requested to UPDATE (complete) the post with id: ${req.params.id}`)
});

// Modify (crUd)
router.patch('/:id', (req, res) => {
    res.send(`You requested to MODIFY (partial) the post with id: ${req.params.id}`)
});

// Destroy (cruD)
router.delete('/:id', (req, res) => {
    res.send(`You requested to DELETE the post with id: ${req.params.id}`)
});

module.exports = router;