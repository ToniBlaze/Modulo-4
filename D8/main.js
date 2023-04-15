let urlApi = "https://striveschool-api.herokuapp.com/api/product/";
// let urlApi = "http://localhost:3000/";

// SELEZIONA SPINNER 
const spinnerContainer = document.querySelector(".spinner-border");

async function getToken() {
  try {
    // MOSTRA SPINNER
    spinnerContainer.classList.remove("d-none");
    
    const response = await fetch(urlApi, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
      }
    });
    const data = await response.json();
    console.log(data);

    // MOSTRA PRODOTTI
    displayProducts(data);

    // RIMUOVI SPINNER
    spinnerContainer.classList.add("d-none");

  } catch (error) {
    console.log("Errore nel recupero degli utenti: ", error);
    // RIMUOVI SPINNER
    spinnerContainer.classList.add("d-none");
  }
}
getToken();

// COLLEGAMENTO AL BACKEND
function addProduct() {
  window.location.href = "backoffice.html";
}

function displayProducts(products) {
  let container = document.getElementById("main");
  container.innerHTML = "";

  products.forEach((elem) => {
    let card = `
        <div class="card col-3 pt-2 mx-2 mb-5">
            <img src="${elem.imageUrl}" class="card-img-top img-fluid h-100">
            <div class="card-body">
                <h5 class="name">${elem.name}</h5>
                <h6 class="brand">${elem.brand}</h6>
                <p class="description">${elem.description}</p>
                <p class="price">Price: <b>${elem.price}$</b></p>
                <div>
                  <button class="btn btn-primary" onclick="editProduct('${elem._id}')">Modifica</button>
                  <button class="btn btn-danger" onclick="deleteProduct('${elem._id}')">Elimina</button>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += card;
  });
}

// ELIMINA PRODOTTO DALLA PAGINA e SERVER
async function deleteProduct(productId) {
  if (confirm("Sei siuro di voler eliminare questo prodotto?")) {
    try {
      await fetch(`${urlApi}${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
        }
      });
      window.location.href = "index.html";
      alert("Prodotto eliminato!");
    } catch (error) {
      console.log("Errore durante cancellazione prodotto: ", error);
    }
  }
}

// MODIFICA PRODOTTO
function editProduct(productId) {
  window.location.href = `backoffice.html?id=${productId}`
}