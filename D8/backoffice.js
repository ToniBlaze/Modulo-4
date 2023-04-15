function goBack() {
  window.location.href = "index.html";
}

let urlApi = "https://striveschool-api.herokuapp.com/api/product/";

// VARIABILI
const productForm = document.querySelector("form");
let productIdInput = document.getElementById("product-id");
let nameInput = document.getElementById("name");
let descriptionInput = document.getElementById("description");
let brandInput = document.getElementById("brand");
let imageUrlInput = document.getElementById("imageUrl");
let priceInput = document.getElementById("price");


// RECUPERARE DATI PRODOTTO:
//   cosi da capire se c'è ID nelle queries string(quindi modificare) 
//   oppure è un nuovo prodotto da aggiungere

async function getProductData() {

  // Prendi ID da query string
  const queryStringInfo = new URLSearchParams(window.location.search);
  const productId = queryStringInfo.get('id')

 // buildPageTitle(userId)

  if (productId) {
    
    productIdInput.value = productId

    try {
      const response = await fetch(`${urlApi}${productId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
        }
      });
      const product = await response.json();
          
      productIdInput.value = productId
      nameInput.value = product.name
      descriptionInput.value = product.description
      brandInput.value = product.brand
      imageUrlInput.value = product.imageUrl
      priceInput.value = product.price
    
      console.log(product);
      console.log(productIdInput.value);
  
    } catch (error) {
      console.log('Errore nel recupero dati del prodotto: ', error);
    }
  }
}
getProductData()


productForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageUrlInput.value,
    price: priceInput.value,
  };

  alert(productIdInput.value)

  try {
    if (productIdInput.value) {
      // *******************
      // ERRORE 404 perche??
      //******************* 
      const response = await fetch(`${urlApi}${productIdInput.value}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
        },
        body: JSON.stringify(newProduct),
      })

      if (response.ok) {
        window.location.href = "index.html";
        alert("Prodotto modificato!")
      } else {
        alert("Errore durante la modifica del prodotto");
      }
      
    } else {
      // AGGIUNGI PRODOTTO
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        window.location.href = "index.html";
        alert("Prodotto aggiunto!")
      } else {
        alert("Errore durante l'aggiunta del nuovo prodotto");
      }
    }
  } catch (error) {
    console.log("Si è verificato un errore durante il salvataggio: ", error);
  }
});

