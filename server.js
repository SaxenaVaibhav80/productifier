const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
var name=''
app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  name = req.body.user;
  goal = req.body.goal;
  task = req.body.task;
  res.sendFile(__dirname + "/index.html");
});
app.post("/stopwatch", function (req, res) {
  goal = req.body.goal;
  task = req.body.task;
  console.log(goal)
  console.log(task)
  res.render("stopwatch.hbs", { userName: name });
});

// app.get("/stopwatch",(req, res) => {
//   res.render("stopwatch.hbs", { userName: name });
// });

app.listen(3000);

