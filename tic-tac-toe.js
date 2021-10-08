"use strict";
window.onload=function(){
    var body =document.getElementsByTagName("body");
    console.log(body);
    var myDiv1= document.getElementById("game");
    console.log(myDiv1);
    console.log(myDiv1.parentNode);
    //console.log(myDiv1.childNodes);
    console.log(myDiv1.children);

    var boxes=document.getElementById("board").getElementsByTagName("div");
    for(var i=0;i<boxes.length;i++){
        boxes[i].className= "square";
    }
    
    //var newGame =document.querySelector("button");
    //newGame.addEventListener("click", function(element){
       // console.log("Button Clicked");
        
    //});


}