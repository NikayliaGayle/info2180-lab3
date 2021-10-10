"use strict";
window.onload=function(){
    var body= document.getElementsByTagName("body");
    var gameboard= document.getElementById("game");
    var playsX= [];
    var playsO=[];
    var winWays=[['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['6','4','2']];



    var boxes=document.getElementById("board").getElementsByTagName("div");
    for(var i=0;i<boxes.length;i++){
        boxes[i].className= "square";
        boxes[i].id=""+i;
    }
   
    var j=0;
    for (const item of boxes){
        
        item.addEventListener("click",function(){
            console.log("square clicked");
            if (j%2==0){
                item.textContent="X";
                item.classList.add("X");
                playsX.push(item.id);
                console.log(playsX);
                Winner();
                
            }
            else{
                item.textContent="O";
                item.classList.add("O");
                item.classList.add("hoverO");
                playsO.push(item.id);
                console.log(playsO);
                Winner();
                
            }
            j++;
        },{once:true});
        //item.removeEventListener("click",function());

        function Winner(){
            for (var m=0;m<winWays.length;m++){
                //console.log(winWays)
                var a =boxes[winWays[m][0]].textContent;
                var b= boxes[winWays[m][1]].textContent;
                var c= boxes[winWays[m][2]].textContent;
                console.log(a);
                if (a=='' || b=='' || c=='' ){
                    //console.log(a,b,c);
                    continue;
                }
                else if (a== b&& b==c){
                    //console.log(a,b,c);
                    if (a=='X'){
                        document.getElementById("status").classList.add("you-won");
                        document.getElementById("status").textContent="Congratulations! X is the Winner!"
                        break;
                    }
                    if (a=='O'){
                        document.getElementById("status").classList.add("you-won");
                        document.getElementById("status").textContent="Congratulations! O is the Winner!"
                        break;
                    }
                }
                else if(playsO.length+playsX.length==9){
                    document.getElementById("status").classList.add("you-won")
                    document.getElementById("status").textContent="It Looks Like There is a Tie."
                }

            }
            
            return;
        }

        item.addEventListener("mouseover",function(){
            item.classList.add("hover");
        });

        item.addEventListener("mouseout",function(){
            item.classList.remove("hover");
        });
            
        
    }


    var newGame=document.querySelector("button");
    newGame.addEventListener("click", function(){
        for (var k=0;k<boxes.length;k++){
            boxes[k].classList.remove("X");
            boxes[k].classList.remove("O");
            boxes[k].textContent='';
            j=0;
            playsX=[];
            playsO=[];
            document.getElementById("status").classList.remove("you-won");
            document.getElementById("status").textContent="Move your mouse over a square and click to play an X or an O.";
        }
    });
    

}