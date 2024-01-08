import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

//app.set('view engine', 'ejs')


function findIsWeekday(req, res, next){
    const d = new Date();
    var date = d.getDay();
    //console.log(date)
    //req.isWeekday = (date <= 5);
    if (date === 0 || date === 6) {
        req.isWeekday = false;
    } else {
        req.isWeekday = true;
    }
    next(); 

}

app.use(findIsWeekday)

app.get("/", (req, res) => {
    res.render("index.ejs", {
        isWeekday: req.isWeekday
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  