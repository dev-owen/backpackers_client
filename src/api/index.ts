import axios from "axios";

const api = {
  spots: "https://api.hnpwa.com/v0/news/1.json"
};

function fetchSpots() {
  return axios.get(api.spots);
}

export { fetchSpots };
