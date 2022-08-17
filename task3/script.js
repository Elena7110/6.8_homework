const trafficLightR = document.querySelector('#trafficLightRed');
const trafficLightY = document.querySelector('#trafficLightYellow');
const trafficLightG = document.querySelector('#trafficLightGreen');


trafficLightG.addEventListener('click', () => {
   trafficLightG.style.background = ('green');  
	document.querySelector('#trafficLightYellow').style.backgroundColor = "black";
	document.querySelector('#trafficLightRed').style.backgroundColor = "black";
});


trafficLightY.addEventListener('click', () => {
	trafficLightY.style.background = ('yellow');
	document.querySelector('#trafficLightRed').style.backgroundColor = "black";
	document.querySelector('#trafficLightGreen').style.backgroundColor = "black";
});


trafficLightR.addEventListener('click', () => {
	trafficLightR.style.background = ('red');
	document.querySelector('#trafficLightYellow').style.backgroundColor = "black";
	document.querySelector('#trafficLightGreen').style.backgroundColor = "black";
});
