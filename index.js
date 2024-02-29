var random1=Math.floor(Math.random()*6) + 1;
var newp = "./images/dice"+random1+".png"
document.querySelector("img").setAttribute("src",newp);

var random2=Math.floor(Math.random()*6) + 1;
var newpr = "./images/dice"+random2+".png"
document.querySelectorAll("img")[1].setAttribute("src",newpr);

if(random1 > random2)
    document.getElementsByTagName("h1")[0].innerHTML="player 1 wins";
if(random2 > random1)
    document.getElementsByTagName("h1")[0].innerHTML="player 2 wins";
if(random1 === random2)
    document.getElementsByTagName("h1")[0].innerHTML="DRAW";