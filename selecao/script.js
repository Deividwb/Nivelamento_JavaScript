const item1 = document.querySelector("li");
console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML);


const items = document.querySelectorAll("li");
console.log(items);

const card1 = document.querySelector(".card");
console.log(card1);

const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição";
card1.appendChild(paragrafo)
card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");//maneira antiga
console.log(cards);

Array.from(cards).map(item => {
    console.log(item.innerHTML);
})

console.log("Dataset______________________________")
//dataset ajuda a acessar e trabalhar elementos de uma forma alternativa

const card3 = document.querySelector('[data-product-id="32"]');
console.log(card3);
