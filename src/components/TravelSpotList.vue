<template>
  <div class="travelspot">
    <div class="spot-list">
      <div v-bind:key="spot.id" v-for="(spot, index) in this.spots">
        <TravelSpot v-bind:content="spot" v-bind:rating="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import TravelSpot from "./TravelSpot";
// import bus from "../utils/bus";

export default {
  name: "TravelSpotList",
  data() {
    return {
      rating: 1,
      loadingStatus: false,
      spots: this.$store.getters.GET_SPOTS
    };
  },
  components: {
    TravelSpot
  },
  created() {
    const spots = this.$store.state.spots;
    const country = [];
    const region = {};
    const selectedCountry = this.$store.getters.GET_SELECTED_COUNTRY;
    const selectedRegion = this.$store.getters.GET_SELECTED_REGION;
    if (selectedCountry !== "") {
      spots.filter(spot => spot.country === selectedCountry);
    }
    if (selectedRegion !== "") {
      spots.filter(spot => spot.region === selectedRegion);
    }
    spots.forEach(spot => {
      if (!country.includes(spot.country)) {
        country.push(spot.country);
        region[spot.country] = [spot.region];
      } else {
        if (!region[spot.country].includes(spot.region))
          region[spot.country].push(spot.region);
      }
    });
    this.$store.commit("SET_COUNTRYLIST", country);
    this.$store.commit("SET_REGIONLIST", region);
    this.sortByStarRate(spots);
  },
  // TODO : filter에 따라 리스트 업데이트 해야 하는 기능 구현 필요
  // computed() {
  //   const spots = this.$store.state.spots;
  //   const selectedCountry = this.$store.getters.GET_SELECTED_COUNTRY;
  //   const selectedRegion = this.$store.getters.GET_SELECTED_REGION;
  //   if (selectedCountry !== "") {
  //     spots.filter(spot => spot.country === selectedCountry);
  //   }
  //   if (selectedRegion !== "") {
  //     spots.filter(spot => spot.region === selectedRegion);
  //   }
  //   this.sortByStarRate(spots);
  // },
  methods: {
    sortByStarRate(spots) {
      spots.sort((a, b) => {
        if (a.starRate === b.starRate) {
          return a.spotName > b.spotName ? 1 : -1;
        } else {
          return a.starRate < b.starRate ? 1 : -1;
        }
      });
      this.spots = spots;
    }
  }
};
</script>

<style scoped lang="scss">
.travelspot {
  .filter-button {
    height: 20px;
  }

  .spot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div div {
      width: 300px;
      height: 200px;
      padding: 20px;
      margin: 15px;
      color: white;
    }
  }
}
</style>
