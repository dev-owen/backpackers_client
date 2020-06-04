import { fetchSpots, fetchDummySpots } from "@/api";

export default {
  // Promise
  // FETCH_SPOTS({ commit }: { commit: any }) {
  //   return fetchSpots().then(response => {
  //     commit("SET_SPOTS", response.data);
  //     return response;
  //   });
  // },

  // async
  async FETCH_SPOTS({ commit }: { commit: any }) {
    const response = await fetchSpots();
    commit("SET_SPOTS", response.data);
    return response;
  },
  async FETCH_DUMMY_SPOTS({ commit }: { commit: any }) {
    const response = await fetchDummySpots();
    commit("SET_DUMMY_SPOTS", response.data);
    return response;
  }
};
