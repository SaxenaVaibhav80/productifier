import https from 'https'
import express from 'express'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import path from 'path'; 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
var riddle
var result
var name=''
var task=''
var goal=''
var json=''
var app = express();
var url=" https://riddles-api.vercel.app/random"
app.use(bodyParser.urlencoded({ extended: true }));

var my_list=[]
app.set('view engine','ejs')
app.get('/todolist',function(req,res)
{
   https.get(url,function(response)
  {

      response.on('data',function(data){
      riddle=JSON.parse(data)['riddle'];
      result=JSON.parse(data)['answer'];
      var today=new Date()
      var option=
    {
      weekday:"long",
      month:'long',
      day:"numeric"
    }
      var day=today.toLocaleDateString('en-US',option)
  
      res.render("todo",{kindofday:day,item:my_list,riddle_ques: riddle,res:result})
    })
  })  
})

app.post('/todolist', function(req,res)
{
    const value=req.body.data
    my_list.push(value)
    res.redirect('/todolist')
})


app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// app.get("/todolist", (req, res) => {
//   res.render("todo",{kindofday:day,item:my_list,list:my_list});
// });

app.post("/", function (req, res) {
  name = req.body.user;
  goal = req.body.goal;
  task = req.body.task;
  res.sendFile(path.join(__dirname, '/index.html'));
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

