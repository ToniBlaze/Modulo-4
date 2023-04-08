const ApiUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchApi() {
  const response = await fetch(ApiUrl);
  const data = await response.json();
  return data;
}
fetchApi().then((data) => {
  createTable(data);
});

// Funzione per creare la tabella
function createTable(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Intestazioni colonne
  const headers = ["Nome", "Numero", "Utente", "Email", "Company"];

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
    <td>${elem.phone}</td>
    <td>${elem.username}</td>
    <td>${elem.email}</td>
    <td>${elem.company.name}</td>`;

    tbody.appendChild(row);
  });

  // Aggiunta corpo della tabella
  table.appendChild(tbody);

  // Aggiunta della tabella al div con id="table"
  const tableDiv = document.getElementById("table");
  tableDiv.appendChild(table);
}

//AGGIORNA TABELLA
function updateTable(filteredUsers) {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  filteredUsers.forEach((user) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.phone}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.company.name}</td>`;

    tbody.appendChild(row);
  });
}

// VARIABILI FILTRI
const filter = document.getElementById("filter");
const search = document.getElementById("input-search");

async function filterUsers() {
  const users = await fetchApi();
  const searchText = search.value.toLowerCase();
  const selectedFilter = filter.value;
  let filteredUsers = [];
  switch (selectedFilter) {
    case "name":
      filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchText)
      );
      break;
    case "username":
      filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchText)
      );
      break;
    case "email":
      filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(searchText)
      );
      break;
  }
  updateTable(filteredUsers);
}

filter.addEventListener("change", filterUsers);
search.addEventListener("input", filterUsers);
filterUsers();

// BOTTONE CHE CREA LISTA NOMI
function createNameList() {
  fetchApi().then((data) => {
    const ul = document.querySelector("ul.nameList");
    ul.innerHTML = "";

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      ul.appendChild(li);
    });
  });
}

// BOTTONE CHE CREA LISTA INDIRIZZI
function createAddressList() {
  fetchApi().then((data) => {
    const ul = document.querySelector("ul.addressList");
    ul.innerHTML = "";

    const addresses = data.map((user) => {
      return `${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode})`;
    });

    addresses.forEach((address) => {
      const li = document.createElement("li");
      li.textContent = address;
      ul.appendChild(li);
    });
  });
}
