let duplicateField = document.querySelector("#duplicateField");
let Button = document.querySelector('button');
let message = document.querySelector('#text');

addEventListener("keypress", (e) => {
	duplicateField.textContent = e.target.value;
});

Button.addEventListener('click', (e) => {
	duplicateField.textContent = " ";
	document.forms.formText.reset() ; //- команда очищает и форму и консоль
});

// document.forms.formText.onsubmit = function () {
	// const message = this.message.value;
	console.log(message);
	// return false;
// };