let gameseq=[];
let userseq=[];
 let btns=["red","yellow","blue","green"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Started");
        started=true;

        levelup();
    }
});
 
function gameflash(btn){
       btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },200);
    }
    function userflash(btn){
        btn.classList.add("userflash");
      setTimeout(function(){
         btn.classList.remove("userflash");
      },200);
     }
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcl=btns[randidx];
    let randbtn=document.querySelector(`.${randcl}`);
    // console.log(randbtn);
    // console.log(randcl);
    // console.log(randidx);
    gameseq.push(randcl);
    console.log(gameseq); 
gameflash(randbtn);
}
 function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
       setTimeout(levelup,800);
       }
    }
    else{
        h3.innerHTML=`Game over!Your Score was <b>${level}</b><br>press any key to start again!!!`;
           document.querySelector("body").style.backgroundColor="red";  
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
           },150);
        reset();
    }
 }
function btnpress(){
let btn=this;
userflash(btn); 
userColor=btn.getAttribute("id");
userseq.push(userColor);
checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    
}