function getData() {
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then((response) => response.json())
    .then((data) => {
      const results = data;
      console.log(results);
      insertImg(results);
    });
}
getData();

function insertImg(results) {
  // Inserisci immagini in IMG
  const imgs = document.querySelectorAll(".card img");
  imgs.forEach((elem, i) => {
    elem.setAttribute("src", results[i].img);
  });

  const titles = document.querySelectorAll(".card-title");
  titles.forEach((elem, i) => {
    elem.innerHTML = results[i].title;
  });

  const categories = document.querySelectorAll(".book-category");
  categories.forEach((elem, i) => {
    elem.innerHTML = "Categoria: " + "<b>" + results[i].category + "</b>";
  });

  const asisns = document.querySelectorAll(".book-asin");
  asisns.forEach((elem, i) => {
    elem.innerHTML = "Asin: " + "<b>" + results[i].asin + "</b>";
  });

  const prices = document.querySelectorAll(".book-price");
  prices.forEach((elem, i) => {
    elem.innerHTML = "Price: " + "<b>" + results[i].price + "€" + "</b>";
  });
}

function HideElement() {
  const hideButtons = document.querySelectorAll(".hide");
  hideButtons.forEach((elem) => {
    elem.addEventListener("click", function (event) {
      let cards = event.target.closest(".card");
      cards.remove();
    });
  });
}
HideElement();

function AddToCart() {
  const AddToCartButtons = document.querySelectorAll(".add-to-cart");
  AddToCartButtons.forEach((elem) => {
    elem.addEventListener("click", function (event) {
      let cards = event.target.closest(".card");
      cards.classList.add("selected");

      // //AGGIUNGI AL CARRELLO
      // let image = cards.querySelector("img").src;
      // let titolo = cards.querySelector(".card-title").innerText;
      // let categorie = cards.querySelector(".book-category").innerText;
      // let asinNr = cards.querySelector(".book-asin").innerText;
      // let bookPrice = cards.querySelector(".book-price").innerText;

      // const carrello = document.getElementById("cart");
      // let col = document.createElement("div");
      // col.classList.add("------");
      // col.innerHTML = 

      // AGGIUNGERE ELEMENTI AL CARRELLO
      // NON FUNZIONA DA MODIFICARE
    });
  });
}
AddToCart();
