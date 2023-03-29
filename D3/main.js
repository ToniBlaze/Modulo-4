const apiUrl = `https://api.pexels.com/v1/search?query=people`;
const apiUrl2 = "https://api.pexels.com/v1/search?query=sea";
const apiKey = "e22rpiv6xJAY0KEMpSgvWNMwDlXq2tCNFVYHXvs47yNkYR5iBOVb1pNh";

const apiUrl3 = `https://api.pexels.com/v1/search?query=${keyword}`;
// Utilizzare keyword per punto 6


let risultato = null;

function fetchData() {
  fetch(apiUrl, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      risultato = data;
      console.log(risultato);

      // Sostituzione SVG in IMG
      replaceImg();

      // Inserisci immagini in IMG
      insertImg();
    });
}

function fetchData2() {
    fetch(apiUrl2, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        risultato = data;
        console.log(risultato);
  
        // Sostituzione SVG in IMG
        replaceImg();
  
        // Inserisci immagini in IMG
        insertImg();
      });
  }


function replaceImg() {
  // Sostituzione SVG in IMG
  const main = document.querySelector("main");
  const svgs = main.querySelectorAll("svg");
  svgs.forEach((svg) => {
    let img = document.createElement("img");
    svg.parentNode.replaceChild(img, svg);
  });
}

function insertImg() {
  // Inserisci immagini in IMG
  const imgs = document.querySelectorAll("img");
  imgs.forEach((elem, i) => {
    elem.setAttribute("src", risultato.photos[i].src.portrait);
  });
  let smalls = document.querySelectorAll("small")
  smalls.forEach((small, i) => {
    small.innerHTML = risultato.photos[i].id
  })
}


