let Name = document.querySelector('.name');

Name.addEventListener('click', () => {
	Name.textContent = prompt('Напишите новый текст для ссылки');
   while  (Name.textContent == '' || Name.textContent == null ){
		Name.textContent = prompt('Напишите новый текст для ссылки');
}
});

