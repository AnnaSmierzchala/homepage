const firstName = 'Anna';
const age = 27;

console.log(firstName);
console.log(age);
console.log(`Hej, nazywam się ${firstName} i mam ${age} lat`);







function greet(age, firstName) {
    console.log(`Hej, nazywam się ${firstName} i mam ${age} lat`);
    
}

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);

    element.innerHTML = content;
} 

createContent(`.heading__paragraph--js`, 'Witaj świecie');

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    isLightOn: true,
    comander: {
        name: 'Darth Vader',
        age: 44,
    }
}
const myProperty = 'name';
const showMeProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}

showMeProperty('levels')
