import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const data = "Enter your name below";

app.get("/", (req, res) => {
  res.render("index.ejs", { data});
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const lNumber =  fName.length  + lName.length; 
  const newData = `There are ${lNumber} in yoru name.`;
  res.render("index.ejs",{ data: newData});

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
