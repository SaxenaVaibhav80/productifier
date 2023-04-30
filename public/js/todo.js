const express= require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use(express.static('public'))
var my_list=[]
// app.get('/',function(req,res)
// {

//    var today=new Date()
//    const day=today.getDay()
//    var Day=''
//    switch(day){
//     case 1:
//         Day="Tuesday"
//     case 0:
//         Day="Monday"
//     case 2:
//         Day="Wednesday"
//     case 3:
//         Day="Thursday"
//     case 4:
//         Day="Friday"
//     case 5:
//         Day="Saturday"
//     case 6:
//         Day="Sunday"

//    }
//    res.render("todo",{kindofday:Day})

// })

// ---------------OR-------------------

app.get('/',function(req,res)
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

app.post('/', function(req,res)
{
    const value=req.body.data
    my_list.push(value)
    res.redirect('/')
})


app.listen(3000)