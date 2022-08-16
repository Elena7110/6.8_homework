const trafficLightR = document.querySelector('#trafficLightRed');
const trafficLightY = document.querySelector('#trafficLightYellow');
const trafficLightG = document.querySelector('#trafficLightGreen');

function makeGreen() {
   trafficLightG.style.background = ('green');  
	document.querySelector('#trafficLightYellow').style.backgroundColor = "black";
	document.querySelector('#trafficLightRed').style.backgroundColor = "black";
};
trafficLightG.addEventListener('click', makeGreen);

function makeYellow() {
	trafficLightY.style.background = ('yellow');
	document.querySelector('#trafficLightRed').style.backgroundColor = "black";
	document.querySelector('#trafficLightGreen').style.backgroundColor = "black";
};
trafficLightY.addEventListener('click', makeYellow);

function makeRed() {
	trafficLightR.style.background = ('red');
	document.querySelector('#trafficLightYellow').style.backgroundColor = "black";
	document.querySelector('#trafficLightGreen').style.backgroundColor = "black";
};
trafficLightR.addEventListener('click', makeRed);
