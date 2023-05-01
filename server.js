const https=require('https')
const express=require('express')
const bodyParser=require('body-parser')
app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))
app.get("/", (req,res)=>
{
   res.sendFile(__dirname+"/index.html")
})
app.get("/stopwatch", (req,res)=>
{
   res.sendFile(__dirname+"/stopwatch.html")
})

app.post("/",function(req,res)
{
   res.sendFile(__dirname+'/index.html')
})


app.listen(3000)
