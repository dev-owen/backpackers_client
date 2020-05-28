import axios from "axios";

const api = {
  spots: "https://api.hnpwa.com/v0/news/1.json",
  test:
    "ec2-13-125-24-125.ap-northeast-2.compute.amazonaws.com:5000/v1/allusers"
};

function fetchSpots() {
  return axios.get(api.spots);
}

function fetchDummySpots() {
  return axios.get("/data/spots.json");
}

function fetchAllUsers() {
  return axios.get(api.test);
}

export { fetchSpots, fetchAllUsers, fetchDummySpots };
