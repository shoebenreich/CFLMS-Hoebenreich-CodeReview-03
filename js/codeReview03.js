
function calculateInsurance(){
    //DEFINING THE VARIABLES BY GETTING THEM FROM USERINPUT
let name = document.getElementById("name").value;
let age = Number(document.getElementById("age").value);
let country = document.getElementById("country").value;
let hp = Number(document.getElementById("horsepower").value);
let output = document.getElementById("answer");
let insurance;

    switch (country) {
        case "Austria":
            insurance = hp * 100 / age + 50;
            output.innerHTML = `${name}, in ${country} the price for ${hp} horsepower at age ${age} is ${insurance.toFixed(2)}€.`;
        break
        case "Hungary":
            insurance = hp * 120 / age + 100;
            output.innerHTML = `${name}, in ${country} the price for ${hp} horsepower at age ${age} is ${insurance.toFixed(2)}€.`;
        break
        case "Greece":
            insurance = hp * 150 / (age +3) + 50;
            output.innerHTML = `${name}, in ${country} the price for ${hp} horsepower at age ${age} is ${insurance.toFixed(2)}€.`;
        break
        default :
            output.innerHTML = `Something went wrong.`
        break
        }
    }


let button = document.getElementById("bttn");
button.addEventListener("click", calculateInsurance, false);