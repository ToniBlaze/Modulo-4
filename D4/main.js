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

  const cardsAsin = document.querySelectorAll(".card")
  cardsAsin.forEach((elem, i) => {
    elem.id = results[i].asin
  })
}

// funzione per nascondere Card 
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

let cartArray = [];
function AddToCart() {

  const AddToCartButtons = document.querySelectorAll(".add-to-cart");
  AddToCartButtons.forEach((elem) => {
    elem.addEventListener("click", function (event) {
      let cards = event.target.closest(".card");
      cards.classList.add("selected");
      

      //AGGIUNGI AL CARRELLO
      let image = cards.querySelector("img").src;
      let titolo = cards.querySelector(".card-title").innerText;
      let asinNr = cards.querySelector(".book-asin").innerText;
      let bookPrice = cards.querySelector(".book-price").innerText;

      if (!cartArray.includes(asinNr)) {

        cartArray.push(asinNr);
        console.log(cartArray);

        const carrello = document.getElementById("cart");
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("cartProduct");
        col.innerHTML = `
        <div>
          <img src="${image}" style="height:65px; width:65px">
        </div>
        <div>
          <h6>${titolo}</h6>
          <p class="asin">${asinNr} </p>
        </div>
        <div>
          <span>${bookPrice}</span>
        </div>
        <div>
          <a href="#" class="trash-button"><i class="fa-solid fa-trash-can"></i></a>
        </div>`;

        carrello.appendChild(col);
      } else {
        alert("Articolo gia nel carrello");
      }

      removeBook();
    });
  });
}
AddToCart();

// Funzione per rimuovere libro singolo da carello
function removeBook() {
  const trashButtons = document.querySelectorAll(".trash-button");

  trashButtons.forEach((elem) => {
    elem.addEventListener("click", function (event) {
      let buttons = event.target.closest(".cartProduct");
      buttons.remove();

      let asinNumber = buttons.querySelector(".asin").innerText
      asinNumber = asinNumber.split(" ")[1]
      document.getElementById(asinNumber).classList.remove("selected")
      let index = cartArray.findIndex(elem => elem == "Asin: " + asinNumber);
      cartArray.splice(index, 1)
      console.log(index);
    });
  });
}
