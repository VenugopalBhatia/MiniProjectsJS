
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var tme;
var int;
function startTimer(){
    tme = parseInt(document.getElementsByTagName("input")[0].value);
    prev.innerHTML = tme--;
    next.innerHTML = tme;
    if(Number.isInteger(tme) == false){
        return;
    }
    int = setInterval(animate,1500);
    // console.log(tme);
    
}

function animate(){
    
    next.classList.add("animate");
    setTimeout(function(){
        prev.innerHTML = next.innerHTML;
        next.innerHTML = --tme;
        next.classList.remove("animate");
        // tme = tme-1;
        // console.log(tme);
        if(tme < 0){

            clearInterval(int);
            window.alert("Time elapsed")
        }
    },1000)
    
}

