export default {
  SET_SPOTS(state: any, spots: any) {
    spots.sort((a: any, b: any) => {
      return a.points < b.points ? 1 : -1;
    });
    state.spots = spots;
  },
  SET_USER(state: any, user: any) {
    state.user = user;
  },
  SET_LOGIN_STATUS(state: any, login: boolean) {
    state.login = login;
  },
  SET_NOWSPOT(state: any, spot: any) {
    state.nowSpot = spot;
  }
};
