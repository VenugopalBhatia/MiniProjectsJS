// "use strict"

let prev =  document.getElementsByClassName("prev");
let next =  document.getElementsByClassName("next");
let pause = false;
let intvl;
let timeValue;
let currTime = 0;
let toggleButton  =  document.getElementById("toggle");
// let arrTime = new Array(5);
function animation(currTime,timeValue){
    console.log("currTime",currTime)
    

    for(let i = 0;i<5;i++){
        
        console.log(parseInt(((currTime+1)/10**i)%10**(i+1)));
        next[4-i].innerHTML = parseInt(((currTime+1)/10**i)%10**(i+1))  // will have to parse as per i
        
        if(next[4-i].innerHTML == prev[4-i].innerHTML){
            continue;
        }
        next[4-i].classList.add("animate");
        setTimeout(function(){
            prev[4-i].innerHTML = next[4-i].innerHTML;
            next[4-i].classList.remove("animate");
            

            

        },600)

    }
    // currTime++;
    
}

function toggle(){
    if(pause == false){
        toggleButton.innerHTML = "resume";
        pause = true;
        clearInterval(intvl);
    }else{
        toggleButton.innerHTML = "pause";
        pause = false;
        timer();
    }


}

function reset(){

    currTime = 0;
    clearInterval(intvl);
    if(pause!=true){
        timer();
    }
    

    for(let i = 0;i<5;i++){
        prev[i].innerHTML = 0;
        // next[i].innerHTML = 0;
    }

}

function timer(){
    if(pause == true){
        return;
    }
    
    timeValue = parseInt(document.getElementsByTagName("input")[0].value);
    // let timeIntervals = [];
    intvl = setInterval(function(){
        if(currTime>=timeValue){
            clearInterval(intvl);
        }
        animation(currTime++,timeValue);
        
    },1000);
    

    

    



}






































// var next = document.querySelector(".next");
// var prev = document.querySelector(".prev");
// var tme;
// var int;
// function startTimer(){
//     tme = parseInt(document.getElementsByTagName("input")[0].value);
//     // prev.innerHTML = tme--;
//     // next.innerHTML = tme;
//     if(Number.isInteger(tme) == false){
//         return;
//     }
//     int = setInterval(animate,1500);
//     // console.log(tme);
    
// }

// function animate(){
    
//     next.classList.add("animate");
//     setTimeout(function(){
//         prev.innerHTML = next.innerHTML;
//         next.innerHTML = --tme;
//         next.classList.remove("animate");
//         // tme = tme-1;
//         // console.log(tme);
//         if(tme < 0){

//             clearInterval(int);
//             window.alert("Time elapsed")
//         }
//     },1000)
    
// }