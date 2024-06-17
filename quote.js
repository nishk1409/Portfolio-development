//variable 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        person:`Dr. Seuss`

    },
    {
        quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
        person:`oscar wilde`
    },
    {
        quote: `“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”`,
        person: `marlin monroe `

    },
    {
        quote:`"Time you enjoy wasting is not wasted time."`,
        person:`anonymous`

    },
    {
        quote:`"If you don't like the road you're walking, start paving another one."`,
        person: `Dolly Parton`
    }
]

btn.addEventListener('click', function(){
    let random= Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})











