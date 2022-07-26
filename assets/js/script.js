// lorem text
const text = [
`Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead. Christopher Avery, The Responsibility Process`,
`Simplicity requires a two-step process. First, we must invest time and energy to discover what stirs us as human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the life that reflects the unique people we truly are. This is the heart and soul of simplicity. Linda Breen Pierce, Choosing Simplicity`,
`We have three roles here on earth: to learn, to love, and to live. When we stop learning, we start to stagnate and die. When we stop loving, we lose our sense of purpose and become self-centered. When we limit our living, we deny the world the benefits of our talents. Jim Cathcart, The Acorn Principle`,
`A life portfolio offers a compelling alternative to traditional retirement. It is a new way of thinking and living in extended middle age. A typical portfolio is a balanced mix of some work, ongoing learning, recreation, travel and avocations, reconnecting with family and friends, and giving back. Michael Jeans`,
`Most of those who have succeeded in life can trace their success back to the essential education they obtained from parents, teachers and/ or friends. T-Ralph Olaniyi, The Education Our Parents Denied Us`,
`The foundation stones of honesty, character, faith, integrity, love, and loyalty are necessary for a balanced success that includes health, wealth, and happiness. As you go onward and upward in life, you will discover that if you compromise any of these principles you will end up with only a beggar's portion of what life has to offer. Zig Ziglar, See You At The Top`,
`You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day. Squire Rushnell, When God Winks on New Beginnings`,
`Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can. Dalai Lama`,
`Life is a gamble from minute to minute so play it today for all there is in it. The flick of an eye lash, the quirk of a smile. A good deed here and there makes it all worthwhile. So make life a garden for everyday and gather your rosebuds while you may. P. MacDonald`
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector(".lorem-text");

form.addEventListener('submit', function(e){
e.preventDefault();
const value = parseInt (amount.value);
const random = Math.floor(Math.random() * text.length);

if (isNaN(value) || value <= 0 || value > 9) {
result.innerHTML = `<p class="result">${text[random]}</p>`;
}
else {
let tempText = text.slice(0,value);
tempText = tempText.map(function(item){
    return `<p class="result">${item}</p>`;
})
.join("");
result.innerHTML = tempText;
}
});