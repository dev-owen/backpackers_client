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
  },
  SET_ALL_USERS(state: any, allusers: any) {
    state.allusers = allusers;
  },
  SET_DUMMY_SPOTS(state: any, spots: any) {
    spots.sort((a: any, b: any) => {
      return a.star_rate < b.star_rate ? 1 : -1;
    });
    state.spots = spots;
  },
  SET_COUNTRY_FILTER(state: any, country: string) {
    state.filterCountry = country;
  },
  SET_REGION_FILTER(state: any, region: string) {
    state.filterRegion = region;
  }
};
