let Name = document.querySelector('.name');

function nameChange(){
	Name.textContent = prompt('Напишите новый текст для ссылки');
	while  (Name.textContent == '' || Name.textContent == null ){
		Name.textContent = prompt('Напишите новый текст для ссылки');
  }
}

Name.addEventListener('click', nameChange);

