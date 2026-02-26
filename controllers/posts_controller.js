const posts = require('../data/posts_data');

const index = (req, res) => {

    let results = posts;

    if (req.query.tags) {
        results = posts.filter(post =>
            post.tags.includes(req.query.tags)
        );
    }

    res.json(results)
}

const show = (req, res) => {

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
}

const destroy = (req, res) => {

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
}

const properties = {
    index,
    show,
    destroy
};

module.exports = properties