function goBack() {
  window.location.href = "index.html";
}

const productForm = document.querySelector("form")
productForm.addEventListener("submit", addProduct);

function addProduct(event) {
    event.preventDefault(); 

    const newProduct = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      imageUrl: document.getElementById("imageUrl").value,
      price: document.getElementById("price").value,
    };
  
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotto aggiunto con successo:", data);
      })
      .catch((error) => {
        console.error("Errore durante l'aggiunta del prodotto:", error);
      });
  }
  