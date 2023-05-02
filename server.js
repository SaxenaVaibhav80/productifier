const https=require('https')
const express=require('express')
const bodyParser=require('body-parser')
var name=''
var goal=''
var task=''

const useMiddleware = (req, resp, next) => {
   if (goal=="") {
     console.log("pls")
   }
   else {
      console.log("all filled")
     next()
   }
}
app=express();
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))
app.get("/", (req,res)=>
{
   res.sendFile(__dirname+"/index.html")
})
app.get("/stopwatch", useMiddleware,(req,res)=>
{
   
   res.render("stopwatch.hbs",{userName:name})
})

app.post("/",function(req,res)
{
   name=(req.body.user)
   goal=(req.body.goal)
   task=(req.body.task)
   res.sendFile(__dirname+'/index.html')
})


app.listen(3000)
