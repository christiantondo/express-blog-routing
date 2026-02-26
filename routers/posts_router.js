const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller');

router.get('/', postsController.index);
router.get('/:id', postsController.show);
router.delete('/:id', postsController.destroy);

// Store (Crud)
router.post('/', postsController.store);

// Update (crUd)
router.put('/:id', postsController.update);

// Modify (crUd)
router.patch('/:id', postsController.modify);

module.exports = router;