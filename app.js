/**
 *
 * Dinosaurs app.
 * Compares species to humans and displays random facts,
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
  */

/*


/**
 * Start Page Elements
 *
 */


const compareButton = document.getElementById('btn');
const comparisonGrid = document.getElementById('grid');
const inputDiet = document.getElementById('diet');
const inputFeet = document.getElementById('feet');
const inputInches = document.getElementById('inches');
const inputName = document.getElementById('name');
const inputWeight = document.getElementById('weight');
    

/**
 * End Page Elements
 * * Start Dino Functions
 *
 */


// Create Dino Constructor
function Dino(diet, fact, height, species, weight, where, when){
    this.diet = diet;
    this.fact = fact;
    this.height = height;
    this.species = species;
    this.weight = weight;
    this.where = where;
    this.when = when;
    this.comparisonResults = [];
}

// Create Dino Objects
const getDinos = async () => {
    try {
        const response = await fetch('dino.json');
        const dinos = await response.json();
        return dinos.Dinos.map(dino => new Dino(dino.diet, dino.fact, dino.height, dino.species, dino.weight, dino.where, dino.when));
    } catch(err) {
        console.log(err);
    }

    return []
}

/**
 * End Dino Functions
 * Begin Human Functions
 *
 */


// Create Human Object
function Human(diet, height, name, weight){
    this.diet = diet;
    this.height = height;
    this.name = name;
    this.weight = weight;
}

// Use IIFE to get human data from form
const getHuman = () => {
    const human = (function () {
        const height = inputFeet.value * 12 + inputInches.value;

        return new Human(inputDiet.value, height, inputName.value, inputWeight.value);
    })();

    return human;
}