// selezioni degli elementi della pagina
const eleUserNumber = document.querySelector('#user-number');
const eleComputerNumber = document.querySelector('#computer-number');
const eleOutput = document.querySelector('#output');
const eleBtnPlay = document.querySelector('#btn-play');
const eleBtnReset = document.querySelector('#btn-reset');

eleBtnPlay.addEventListener('click', function () {
	// generazione dei numeri random
	const userNumber = Math.floor(Math.random() * 6 ) + 1;
	const computerNumber = Math.floor(Math.random() * 6 ) + 1;

	eleUserNumber.innerHTML = userNumber;
	eleComputerNumber.innerHTML = computerNumber;

	// determinazione del vincitore
	let msg;
	if (userNumber > computerNumber) {
		msg = 'Hai vinto!';
	} else if (computerNumber > userNumber) {
		msg = 'Ha vinto il computer';
	} else {
		msg = 'Avete pareggiato';
	}

	eleOutput.innerHTML = msg;
});

eleBtnReset.addEventListener('click', function () {
	eleUserNumber.innerHTML = '';
	eleComputerNumber.innerHTML = '';
	eleOutput.innerHTML = '';
})
