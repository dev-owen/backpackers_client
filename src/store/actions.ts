import { fetchSpots } from "@/api";

export default {
  FETCH_SPOTS({ commit }: { commit: any }) {
    return fetchSpots().then(response => commit("SET_SPOTS", response.data));
  }
};
