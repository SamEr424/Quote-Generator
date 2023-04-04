let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"The best way to find yourself is to lose yourself in the service of others."',
    person: 'Mahtma Gandhi'

}, {
    quote: '"Go Fast risk everythang."',
    person: 'Ken Block'
}, {
    quote: '"if you aint scared you are not going fast enough."',
    person: 'Colin Mcrae'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})