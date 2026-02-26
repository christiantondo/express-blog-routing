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

    console.log(`Post ${id} deleted`, {
        posts,
        totalPosts: posts.length
    });

    return res.sendStatus(204);
}

const store = (req, res) => {

    const newPost = {
        id: posts.length > 0
            ? Math.max(...posts.map(post => post.id)) + 1
            : 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    console.log('New Post created and added to posts list', {
        newPost,
        totalPosts: posts.length
    });

    return res.status(201).json(newPost);
}

const update = (req, res) => {

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

    result.title = req.body.title;
    result.content = req.body.content;
    result.image = req.body.image;
    result.tags = req.body.tags;

    console.log(`Post with id: ${id} updated with new data`, {
        result
    });

    return res.json(result);
}

const modify = (req, res) => {
    console.log(`You requested to MODIFY (partial) the post with id: ${req.params.id}`, req.body)
    res.send(`You requested to MODIFY (partial) the post with id: ${req.params.id}`)
}


module.exports = {
    index,
    show,
    destroy,
    store,
    update,
    modify
}