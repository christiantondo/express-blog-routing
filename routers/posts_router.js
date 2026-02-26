const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller');

router.get('/', postsController.index);
router.get('/:id', postsController.show);
router.delete('/:id', postsController.destroy);

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

module.exports = router;