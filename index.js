/*global document*/
var glasses = document.getElementById("glasses");
var spanoulis = document.getElementById("s");

spanoulis.onclick = function(){
    if (glasses.className == "glasses_off"){
        glasses.className = "glasses_on";
    }else {glasses.className = "glasses_off";}
    
};