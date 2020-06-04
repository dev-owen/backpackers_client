import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import data from "../data/spots.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "",
      password: ""
    },
    spots: data.spots,
    filterCountry: "",
    filterRegion: "",
    nowSpot: {
      id: 0,
      spotName: "",
      country: "",
      region: "",
      starRate: 0,
      image: "",
      description: ""
    },
    login: false
  },
  getters,
  mutations,
  actions
});
