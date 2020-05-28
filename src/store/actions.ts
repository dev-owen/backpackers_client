import { fetchSpots, fetchAllUsers, fetchDummySpots } from "@/api";

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
  },
  FETCH_ALL_USERS({ commit }: { commit: any }) {
    return fetchAllUsers().then(response =>
      commit("SET_ALL_USERS", response.data)
    );
  }
};
