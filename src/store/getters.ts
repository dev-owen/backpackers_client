export default {
  GET_USER(state: any) {
    return state.user;
  },
  GET_LOGIN_STATUS(state: any) {
    return state.login;
  },
  GET_SPOT(state: any) {
    return state.nowSpot;
  },
  GET_COUNTRYLIST(state: any) {
    return state.countryList;
  },
  GET_REGIONLIST(state: any) {
    return state.regionList;
  },
  GET_SPOTS(state: any) {
    return state.spots;
  },
  GET_SELECTED_COUNTRY(state: any) {
    return state.selectedCountry;
  },
  GET_SELECTED_REGION(state: any) {
    return state.selectedRegion;
  }
};
