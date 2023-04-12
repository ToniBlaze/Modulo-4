let urlApi = "https://striveschool-api.herokuapp.com/api/product/";

async function getToken() {
  try {
      const response = await fetch(urlApi, {
          headers: {
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODEzMjI0NTAsImV4cCI6MTY4MjUzMjA1MH0.BB-aUJ_dMeR8GymLbMs_t8zqwDe9CIIBtBfEKECfvUM"
          }
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log('Errore nel recupero degli utenti: ', error);
  }
}
getToken()




