let indicator = document.getElementById("percentageCompleted");

let windowHeight = window.innerHeight;

let documentHeight = document.body.offsetHeight;

document.addEventListener("scroll",function percentageComplete(){
    let percentage = Math.floor((window.scrollY)*100/(documentHeight - windowHeight));
    indicator.innerText = percentage + "% Completed";
    document.title = percentage + "%Completed";
})