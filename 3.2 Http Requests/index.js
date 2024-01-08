import express from "express";
const app = express();

app.get("/", (req,res) => {
    //console.log(req.rawHeaders);
    res.send("Hello World!");
});

app.get("/about", (req,res) => {
    res.send("<h1>About Me</h1><p> My name is Melisa</p>");
})

app.listen(3000, () => {
    console.log("Server is running");
})