export default {
  SET_SPOTS(state: any, spots: any) {
    state.spots = spots;
  },
  SET_USER(state: any, user: any) {
    state.user = user;
  },
  SET_LOGIN_STATUS(state: any, login: boolean) {
    state.login = login;
  }
};
