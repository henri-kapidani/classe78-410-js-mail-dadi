const arrEmails = [
	'asdf',
	'qwer',
	'zxcv',
	'uiop',
	'hjkl',
	'vbnm',
];

// selezione elementi della pagina
const eleEmail = document.querySelector('#user-email');
const eleForm = document.querySelector('form');
const eleOuput = document.querySelector('#output');

eleForm.addEventListener('submit', function (event) {
	event.preventDefault();

	// const emailSearched = eleEmail.value;

	let emailFound = false;
	for (let i = 0; i < arrEmails.length; i++) {
		if (eleEmail.value === arrEmails[i]) {
			console.log('trovata');
			emailFound = true;
		}
	}

	if (emailFound) {
		eleOuput.innerHTML = 'Mail trovata';
		document.querySelector('.found').classList.add('visible');
	} else {
		eleOuput.innerHTML = 'Mail NON trovata';
		document.querySelector('.unfound').classList.add('visible');
	}
});