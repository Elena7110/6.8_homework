const consoleLog = document.querySelector('#consoleLog');
const aler_t = document.querySelector('#alert');
const prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
	alert('Служит для вывода информации в консоль');
});

aler_t.addEventListener('click', () => {
	alert('Запускает в браузере окно с текстом и кнопкой для подтверждения');
});

prompt.addEventListener('click', () => {
	alert('Запрашивает у посетителя данные и оперирует ими');
});



