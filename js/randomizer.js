class Employee {
    name = "";
    profession = "Trainer";
    image = "";

    constructor(name,image) {
        this.name = name;
        this.image = image;
    }
}

let trainer1 = new Employee("Theo", "Theo");
let trainer2 = new Employee("Serri", "Serri");
let trainer3 = new Employee("Acilio", "Acilio");
let trainer4 = new Employee("Marina", "Marina");
trainerArray = [trainer1,trainer2,trainer3,trainer4];

function randomizer() {
    randomNumber = Math.floor(Math.random() * 4);
    rnd = document.getElementById("random")
    rnd.innerHTML = `<div style= "width: 20rem; height: 20rem; background-image: url(/img/${trainerArray[randomNumber].image}.png); background-position: center; background-size: cover; border: goldenrod 1rem solid; border-radius: 50%;"></div id="trainerName" style="width: 100%; text-align: center;"><div style=" margin-top: 3rem;"><p style="color: black; font-size: 1.5rem; font-weight: bold;">${trainerArray[randomNumber].name}!</p></div>`
}

let rndButton = document.getElementById("rndbutton");
rndButton.addEventListener("click", randomizer, false);