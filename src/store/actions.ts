import { fetchSpots, fetchAllUsers } from "@/api";

export default {
  FETCH_SPOTS({ commit }: { commit: any }) {
    return fetchSpots().then(response => {
      commit("SET_SPOTS", response.data);
      return response;
    });
  },
  FETCH_ALL_USERS({ commit }: { commit: any }) {
    return fetchAllUsers().then(response =>
      commit("SET_ALL_USERS", response.data)
    );
  }
};
