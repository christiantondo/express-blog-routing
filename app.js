
const express = require('express')
const app = express()
const port = 3000

const posts = require('./data/posts')

// Main page
app.get('/', (req, res) => {
    res.send('Main page')
});

// Index (cRud)
app.get('/posts/', (req, res) => {
    res.json(posts)
});

// Show (cRud)
app.get('/posts/:id', (req, res) => {
    res.send(`You requested to SHOW the post with id: ${req.params.id}`)
});

// Store (Crud)
app.post('/posts/', (req, res) => {
    res.send(`You requested to CREATE a new post`)
});

// Update (crUd)
app.put('/posts/:id', (req, res) => {
    res.send(`You requested to UPDATE (complete) the post with id: ${req.params.id}`)
});

// Modify (crUd)
app.patch('/posts/:id', (req, res) => {
    res.send(`You requested to MODIFY (partial) the post with id: ${req.params.id}`)
});

// Destroy (cruD)
app.delete('/posts/:id', (req, res) => {
    res.send(`You requested to DELETE the post with id: ${req.params.id}`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});