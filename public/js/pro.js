// const a=document.getElementById("fitt")
// a.addEventListener("mouseover",function()
//  {
//     document.getElementsByClassName("fitness-div")[0].style.visibility="visible";
// })
// const b=document.getElementsByClassName("fitness-div")[0];
// b.addEventListener("mouseover",function()
// {
//     document.getElementsByClassName("fitness-div")[0].style.visibility="visible";
// })
// b.addEventListener("mouseout",function()
// {
//     document.getElementsByClassName("fitness-div")[0].style.visibility="hidden";
// })

// const text = require("body-parser/lib/types/text");

// const c=document.getElementById("boook")
// console.log(a)
// c.addEventListener("mouseover",function()
//  {
//     document.getElementsByClassName("book-div")[0].style.visibility="visible";
// })
// const d=document.getElementsByClassName("book-div")[0];
// d.addEventListener("mouseover",function()
// {
//     document.getElementsByClassName("book-div")[0].style.visibility="visible";
// })
// d.addEventListener("mouseout",function()
// {
//     document.getElementsByClassName("book-div")[0].style.visibility="hidden";
// })

$(".signup-box").hide();

$(".signup-rout").click(function()
{   $(".signup-rout").css("visibility","hidden")
    $(".signup-box").slideDown();
    $(".close").css("visibility","visible")
    $(".detail-dis").fadeOut()
})

$(".close").click(function()
{
    $(".signup-box").slideUp();
    $(".signup-rout").css("visibility","visible")
    // $(".close").css("visibility","hidden")
    $(".detail-dis").fadeIn()
})


$(".work-detail").hide();

$(".sw-link").click(function()
{   $(".sw-link").css("visibility","hidden")
    $(".work-detail").slideDown();
    $(".close-sw").css("visibility","visible")
    $(".about-stopwatch-discrip-para").fadeOut()
    $(".about-stopwatch-discrip").fadeOut()
})

$(".close-sw").click(function()
{
    $(".work-detail").slideUp();
    $(".sw-link").css("visibility","visible")
    // $(".close").css("visibility","hidden")
    $(".about-stopwatch-discrip-para").fadeIn()
    $(".about-stopwatch-discrip").fadeIn()
})


$(document).ready(function(){
    $(".todays").click(function(){
        $(".msg-div").animate({
            width: 'toggle'
        });
    });
  });

$(document).ready(function(){
    $(".riddle-pic").click(function(){
        $(".riddle-div").animate({
            width: 'toggle'
        });
    });
  });

