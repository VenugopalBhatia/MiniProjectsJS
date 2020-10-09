var count = 0;
var result = document.getElementById("result")
function countClicks(){

	count++;
	result.innerHTML = "Clicks so far:" + count;
}
var box = document.getElementById("box");


box.addEventListener('click',countClicks);