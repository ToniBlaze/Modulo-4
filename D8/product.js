function goBack() {
  window.location.href = "index.html";
}

let urlApi = "https://striveschool-api.herokuapp.com/api/product/";

// SELEZIONA SPINNER
const spinnerContainer = document.querySelector(".spinner-border");

async function getToken() {
  // Prendi ID da query string
  const queryStringInfo = new URLSearchParams(window.location.search);
  const productId = queryStringInfo.get("id");

  try {
    // MOSTRA SPINNER
    spinnerContainer.classList.remove("d-none");

    const response = await fetch(`${urlApi}${productId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
      },
    });
    const product = await response.json();
    console.log(product);

    // MOSTRA PRODOTTO
    displayProduct(product);

    // RIMUOVI SPINNER
    spinnerContainer.classList.add("d-none");
  } catch (error) {
    console.log("Errore nel recupero degli utenti: ", error);
    // RIMUOVI SPINNER
    spinnerContainer.classList.add("d-none");
  }
}
getToken();

function displayProduct(productinfo) {
  let container = document.getElementById("main");
  container.innerHTML = "";
    
  let card = `
    <div class="container">
        <div class="row text-center">
            <h1 class="mt-4 fw-bold">${productinfo.name}</h1>
            <h3 class="mb-4 my-2">${productinfo.brand}</h3>
            <img src="${productinfo.imageUrl}" class="img-fluid">
            <div class="text-center">
                <p class="mb-0 mt-3 fs-4"> Descrizione: </p>
                <p class="mb-3 mt-1 fs-2 fw-bold">${productinfo.description}</p>
                <p class="mb-0 mt-3 fs-4"> Price: </p> 
                <div class="d-flex justify-content-center">
                <p class="mb-3 mt-1 fs-2 mx-0" id="pricelabel"><b>${productinfo.price}$</b></p>
                </div>
            </div>
        </div>
    </div>`
  
  container.innerHTML += card;
}
