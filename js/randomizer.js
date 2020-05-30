class Employee {
	name = '';
	profession = 'Trainer';
	image = '';
	born = '';
	sex = '';

	constructor(name, image, profession, born, sex) {
		this.name = name;
		this.image = image;
		this.profession = profession;
		this.born = born;
		this.sex = sex;
	}
}

let trainer1 = new Employee('Theoodora Patkos', 'Theo', 'Trainer', 'South Africa', 'female');
let trainer2 = new Employee('Serri', 'Serri', 'Trainer', 'Syria', 'male');
let trainer3 = new Employee('Acilio', 'Acilio', 'Trainer', 'Brazil', 'male');
let trainer4 = new Employee('Marina', 'Marina', 'Trainer', ' Kasachstan', 'female');
trainerArray = [ trainer1, trainer2, trainer3, trainer4 ];

function randomizer() {
	randomNumber = Math.floor(Math.random() * 4);
	rnd = document.getElementById('random');
	rnd.innerHTML = `<div style= "width: 20rem; height: 20rem; background-image: url(./img/${trainerArray[randomNumber]
		.image}.png); background-position: center; background-size: cover; border: goldenrod 1rem solid; border-radius: 50%;"></div>`;
	info = document.getElementById('infoAboutTrainer');
	info.innerHTML = `<div class="information"><b>Name</b>: ${trainerArray[randomNumber]
		.name}</div><div class="information"><b>Profession</b>: ${trainerArray[randomNumber]
		.profession}</div><div class="information"><b>Born in</b>: ${trainerArray[randomNumber]
		.born}</div><div class="information"><b>Sex</b>: ${trainerArray[randomNumber].sex}</div>`;
}

let rndButton = document.getElementById('rndbutton');
rndButton.addEventListener('click', randomizer, false);
