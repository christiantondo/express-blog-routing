const express = require('express');
const router = express.Router();
const posts = require('../data/posts_data')

// Index (cRud)
router.get('/', (req, res) => {

    let results = posts;

    if (req.query.tags) {
        results = posts.filter(post =>
            post.tags.includes(req.query.tags)
        );
    }

    res.json(results)
});

// Show (cRud)
router.get('/:id', (req, res) => {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'User error', message: 'Invalid id' })
    }

    const result = posts.find(post =>
        post.id == id
    );

    if (!result) {
        return res.status(404).json({ error: 'Not Found', message: 'Item not found' })
    }

    return res.json(result);
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

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'User error', message: 'Invalid id' })
    }

    const result = posts.find(post =>
        post.id == id
    );

    if (!result) {
        return res.status(404).json({ error: 'Not Found', message: 'Item not found' })
    }

    posts.splice(posts.indexOf(result), 1);

    console.log(`Post ${id} deleted`, posts);

    return res.sendStatus(204);
});

module.exports = router;