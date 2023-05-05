const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
var name=''
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var my_list=[]
app.set('view engine','ejs')
app.get('/todolist',function(req,res)
{

    var today=new Date()
    var option={
    weekday:"long",
    month:'long',
    day:"numeric"
}
var day=today.toLocaleDateString('en-US',option)

res.render("todo",{kindofday:day,item:my_list})
})

app.post('/todolist', function(req,res)
{
    const value=req.body.data
    my_list.push(value)
    res.redirect('/todolist')
})




app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/todolist", (req, res) => {
  res.render("todo",{kindofday:day,item:my_list,list:my_list});
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

