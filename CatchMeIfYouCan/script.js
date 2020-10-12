var sq = document.getElementById("sqObj");

sq.addEventListener("mouseover",function randomizePos(event){
    console.log("mouseover")
    let position = sq.getBoundingClientRect();
    let x = Math.random() * (window.innerWidth-5);
    let y = Math.random() * (window.innerHeight-5);
    sq.style.position = "absolute";
    sq.style.left = x + "px";
    sq.style.top = y + "px";
    
});

window.addEventListener("resize",function getSqCentre(){
    console.log("resized");
    sq.style.position = "absolute";
    sq.style.left = "50vw";
    sq.style.top = "50vh"
})


