async function fetchData(url, sectionId) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let container = document.getElementById(sectionId);
    let albumID = {};
    data.data.forEach((song) => {
      if (!albumID[song.album.id]) {
        let card = `
            <div class="col mb-4">
              <div class="card">
                <img src="${song.album.cover_medium}" class="card-img-top img-fluid" alt="${song.album.title}">
                <div class="card-body">
                  <h5 class="card-title">${song.album.title}</h5>
                  <p class="card-text">${song.artist.name}</p>
                  <p class="card-text">${song.album.title}</p>
                </div>
              </div>
            </div>`;
        container.innerHTML += card;
        albumID[song.album.id] = true;
      }
    });
  } catch (error) {
    console.error("C'e un errore!", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari`,
    "pinguiniSection"
  );
  fetchData(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin`,
    "maneskinSection"
  );
  fetchData(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood`,
    "mahmoodSection"
  );
});


function showsTitle() {
  let ul = document.getElementById("title-position");
  document.querySelectorAll(".card-title").forEach((elem) => {
    let li = document.createElement("li");
    let text = document.createTextNode(elem.innerText);
    li.appendChild(text);
    ul.appendChild(li);
  });
}
