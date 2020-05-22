const firstName = 'Anna';
const age = 27;

console.log(firstName);
console.log(age);
console.log(`Hej, nazywam się ${firstName} i mam ${age} lat`);


const heading = document.querySelector('.main-header--js');

heading.innerHTML = 'Tu miał być inny tekst ale go zmieniłam za pomocą js'

console.log(heading);
console.log(heading.innerHTML);




function greet(age, firstName) {
    console.log(`Hej, nazywam się ${firstName} i mam ${age} lat`);
    
}

greet(27, 'Anna')



function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);

    element.innerHTML = content;
} 

createContent(`.heading__paragraph--js`, 'Witaj świecie');



const button = document.querySelector('.action--js');
console.log(button);

button.addEventListener('click', () => {
    const heading = document.querySelector('.main-header--js');
    heading.innerHTML = `witaj, nazywam się Anna`;
})
