"use strict"

const cardEl = document.querySelectorAll(".card");
const myInput = document.querySelector('.myInput');
const textCard = document.querySelectorAll("p");
 const conNotFound = document.querySelector(".container-404");

myInput.addEventListener("change", (e) => {
    const SearchCovert = e.target.value;
    const covert = SearchCovert.toLowerCase().trim();
    let found = false;
    console.log(covert)

    for (let items of textCard) {
        console.log(items)
        const texCards = items.textContent.toLowerCase().trim();
        console.log(texCards)
        if (texCards.indexOf(covert) !== -1) {
            items.style.display = "block"; 
            found = true;
        } else {
            items.style.display = "none"
            
        }

    }
    if (found) {
        conNotFound.style.display = "none";
        found = false;
        
    } else {
        conNotFound.style.display = "block"
    }
    
    

});