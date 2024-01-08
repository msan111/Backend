import express from "express";

const app = express();
const port = 3000;

const posts = [];

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

    const newPost = { title, text };
    posts.push(newPost);

    res.redirect("/");

});

app.listen(port, () =>{
    console.log(`Listening on port ${port}` );
});
