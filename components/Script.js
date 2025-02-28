"use strict";

const cardEl = document.querySelectorAll(".card");
const myInput = document.querySelector(".myInput");
const textCard = document.querySelectorAll("p");
const conNotFound = document.querySelector(".container-404");

myInput.addEventListener("input", (e) => {
  const SearchCovert = e.target.value;
  const covert = SearchCovert.toLowerCase().trim();
  let found = false;
  console.log(covert);
  if (SearchCovert === "") {
    textCard.forEach((text) => (text.style.display = "none"));
    return;
  }
  for (let text of textCard) {
    const texCards = text.textContent.toLowerCase().trim();
    if (texCards.includes(covert)) {
      text.style.display = "block";
      found = true;
      conNotFound.style.display = "none";
    } else {
      text.style.display = "none";
    }
  }
  if (!found) {
    conNotFound.style.display = "block";
  } else {
    conNotFound.style.display = "none";
  }
});
