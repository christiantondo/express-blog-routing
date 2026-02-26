
const express = require('express')
const postsRouter = require('./routers/posts_router')

const app = express()
const port = 3000


// Main page
app.get('/', (req, res) => {
    res.send('Main page')
});

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});