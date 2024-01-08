import express from "express";

const app = express();
const port = 3000;

const posts = [];
let postIdCounter = 1;


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.render("index.ejs", { posts: posts } );
});

app.get("/new-post", (req,res) => {
    res.render("new-post.ejs")
});

app.post("/create-post", (req,res) => {
    const title = req.body.title;
    const text = req.body.text;
    const author = req.body.author;


    const newPost = { id: postIdCounter++, title, text, author };
    posts.push(newPost);

    res.redirect("/");

});

app.get("/details/:id", (req,res) => {
    const postId = req.params.id;

    const blogPost = posts.find(post => post.id == postId);

    if(!blogPost){
        return res.status(404).render("404.ejs")
    }

    res.render("details.ejs", { post: blogPost});
});

app.get("/edit-post/:id", (req,res) => {
    const postId = req.params.id;

    const blogPost = posts.find(post => post.id == postId);

    if(!blogPost){
        return res.status(404).render("404.ejs")
    }

    res.render("edit-post.ejs", { post: blogPost});
});

app.get("/delete-post", (req,res) => {
    res.render("delete-post.ejs")
});



app.use((req, res) => {
    res.status(404).render("404.ejs");
  });


app.listen(port, () =>{
    console.log(`Listening on port ${port}` );
});
