"use strict";
window.onload=function(){
    var body= document.getElementsByTagName("body");
    var gameboard= document.getElementById("game");
    var plays= [];



    var boxes=document.getElementById("board").getElementsByTagName("div");
    for(var i=0;i<boxes.length;i++){
        boxes[i].className= "square";
    }
   
    var j=0;
    for (const item of boxes){
        item.addEventListener("click",function(){
            console.log("square clicked");
            if (j%2==0){
                item.textContent="X";
                item.classList.add("X");
            }
            else{
                item.textContent="O";
                item.classList.add("O");
            }
            j++;
        })
    }



}