const ApiUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchApi() {
  try {
    const response = await fetch(ApiUrl);
    const data = await response.json();
    console.log(data);

    createTable(data);
  } catch (error) {
    console.error(error);
  }
}
fetchApi();

// Funzione per creare la tabella
function createTable(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Intestazioni colonne
  const headers = [
    "Nome",
    "Indirizzo",
    "Numero",
    "Utente",
    "Email",
    "Website",
    "Company",
  ];

  // Aggiunta delle intestazioni delle colonne alla tabella
  const headerRow = document.createElement("tr");
  headers.forEach((elem) => {
    const th = document.createElement("th");
    th.textContent = elem;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Aggiunta info utenti alla tabella
  data.forEach((elem) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${elem.name}</td>
    <td>${elem.address}</td>
    <td>${elem.phone}</td>
    <td>${elem.username}</td>
    <td>${elem.email}</td>
    <td>${elem.website}</td>
    <td>${elem.company.name}</td>`;

    tbody.appendChild(row);
  });

  // Aggiunta corpo della tabella
  table.appendChild(tbody);

  // Aggiunta della tabella al div con id="table"
  const tableDiv = document.getElementById("table");
  tableDiv.appendChild(table);
}
