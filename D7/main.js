let tokenApi = "https://striveschool-api.herokuapp.com/api/product/";

async function getToken() {
  try {
    const response = await fetch(tokenApi, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Errore nel recupero degli utenti: ", error);
  }
}
getToken();

let urlApi = "http://localhost:3000/";

async function getProducts() {
  try {
    const response = await fetch(urlApi + "products");
    const data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    console.log("Errore nel recupero degli utenti: ", error);
  }
}
getProducts();

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
            </div>
        </div>
    `;
    container.innerHTML += card;
  });
}

function addProduct() {
  window.location.href = "backoffice.html";
}
