let duplicateField = document.querySelector("#duplicateField");
let Button = document.querySelector('button');
let message = document.querySelector('#text');

addEventListener("keypress", (e) => {
	duplicateField.textContent = e.target.value;
});

Button.addEventListener('click', (e) => {
	console.log(message.value);
	duplicateField.textContent = " ";
	message.value = " ";
	e.preventDefault();
});
