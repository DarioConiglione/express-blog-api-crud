const posts = require('../data/postsData');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    res.json(post);
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // Rimuoviamo la pizza dal menu
    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204);


}


module.exports = { index, show, store, update, destroy }