import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1>");
})

//different end-point
app.get("/contact", (req,res) => {
    res.send("<h1>Contact</h1>");
})

app.listen(port, () => {
    console.log(`server running on port ${port}.`);
})