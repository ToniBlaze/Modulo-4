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

console.log(productIdInput);

// productForm.addEventListener("submit", addProduct);

// AGGIUNTA PRODOTTO (chiamata POST)

// function addProduct(event) {
//   event.preventDefault();

//   const newProduct = {
//     name: nameInput.value,
//     description: descriptionInput.value,
//     brand: brandInput.value,
//     imageUrl: imageUrlInput.value,
//     price: priceInput.value,
//   };

//   fetch(urlApi, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM",
//     },
//     body: JSON.stringify(newProduct),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Prodotto aggiunto con successo:", data);
//       window.location.href = "index.html";
//     })
//     .catch((error) => {
//       console.error("Errore durante l'aggiunta del prodotto:", error);
//     });
// }

/////////////////////////////////

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

  try {
    if (productIdInput.value) {
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

