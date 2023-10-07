console.log("Welcome to TicTacToe");
// learning 1 how to add audio
let music=new Audio("inside.mp3");
// music.play();
let Audioturn=new Audio("ting.mp3");
let over=new Audio("over.wav");
let turn="X";
let gameover=false;
// function to change turn
 const changeTurn= ()=>{
      return turn==="X"?"0":"X"
}
//function to checkwinner
 const checkwin =()=>{
let boxtexts=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e=>{
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=="")){
    document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won "
    gameover=true;
    
    over.play();
    document.querySelector('.imageinfo').getElementsByTagName('img')[0].style.width="200px";
    }
})
}
//game logic
//music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext=element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerText ===''){
        boxtext.innerText=turn;
        turn= changeTurn();

        Audioturn.play();
        checkwin();
        if(!gameover)
        {
         document.getElementsByClassName("info")[0].innerText=" Turn for "+ turn;
        }
    }
})
})
reset.addEventListener('click',()=>{
 let boxetexts=document.querySelectorAll('.boxtext');
Array.from(boxetexts).forEach(element =>{
    element.innerText="";     
});
turn ='X';
gameover=false;
document.getElementsByClassName("info")[0].innerText=" Turn for "+ turn;
document.querySelector('.imageinfo').getElementsByTagName('img')[0].style.width="0px";
})
