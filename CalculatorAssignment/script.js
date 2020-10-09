// "use strict";


// Basic functionality based on input from buttons.

var evlEx = "";
var prevExp = "";
var result = 0;
var buttons = document.getElementsByTagName("button");
var display = document.getElementById("screen");
function parseStr(str){
    var res = "";
    var splits = str.split(" ")
    console.log("splits: " + splits);
    var spl;
    for(spl = 0;spl<splits.length;spl++){
      console.log("spl: " + splits[spl])
      var num = parseFloat(splits[spl]);
      console.log("num:" + num)
      if(isNaN(num)==false){
        console.log("res: " + res);
        res+=num;
      }else{
        res+=splits[spl];
      }
      
      
    }
    return res;
  }

  function isNumber(num){
      return typeof(num) === "number" && isFinite(num);
  }
var eventRec = function(currentVal){
    console.log(currentVal);
    var currVal;
    if(typeof(currentVal) == "string"){
        currVal = currentVal;
    }else{
        currVal = this.getAttribute("value-id");
    }
     
    if(currVal == "="){
        evlEx = parseStr(evlEx);
        result = eval(evlEx);
        if(isNumber(result)){
            display.value = result;
        }else{
            display.value = "Error"
        }
        
        console.log("exp: " + evlEx);

    }else if(currVal == "AC"){
        prevExp = evlEx;
        evlEx = "";
        display.value = "0";
        console.log("exp: " + evlEx);
    }else if(currVal == "history"){
        evlEx = prevExp;
        display.value = evlEx;
    }else{
        evlEx = evlEx + currVal;
        console.log(evlEx);
        display.value = evlEx;
        console.log("exp: " + evlEx);
    }
}

for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click",eventRec);
}

document.addEventListener("keydown",function(event){
    var currentVal =  String.fromCharCode(event.keyCode);
    eventRec(currentVal);

},eventRec)

// console.log(eval("2^(1+3)"));

