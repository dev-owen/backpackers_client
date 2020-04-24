import axios from "axios";

const api = {
  news: "https://api.hnpwa.com/v0/news/1.json"
};

function fetchNews() {
  return axios.get(api.news);
}

export { fetchNews };
