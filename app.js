const express = require('express')
const postsRouter = require('./routers/posts_router')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('public'));
app.use('/posts', postsRouter);

// Main page
app.get('/', (req, res) => {
    res.send('Main page')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});