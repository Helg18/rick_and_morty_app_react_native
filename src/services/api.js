const BASE_API = "https://rickandmortyapi.com/api/";
const CHARACTER = "character/";
const LOCATION = "location/";
const EPISODE = "episode/";

class Api {
  async getCharacters() {
    return await fetch(`${BASE_API}${CHARACTER}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      });;
  }
  async getLocations() {
    return await fetch(`${BASE_API}${LOCATION}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
      });
  }
  async getEpisodes() {
    return await fetch(`${BASE_API}${EPISODE}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
      });
  }

}

export default new Api();