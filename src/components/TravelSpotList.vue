<template>
  <div class="travelspot">
    <div class="filter-button">
      <button v-on:click="sortByStarRate">sort</button>
    </div>
    <div class="spot-list">
      <div
        v-bind:key="spot.id"
        v-for="(spot, index) in this.$store.state.spots"
      >
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
      loadingStatus: false
    };
  },
  components: {
    TravelSpot
  },
  created() {
    const spots = this.$store.state.spots;
    const country = [];
    const region = {};
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
  },
  methods: {
    sortByStarRate() {
      const spots = this.$store.state.spots;
      spots.sort((a, b) => {
        return a.starRate < b.starRate ? 1 : -1;
      });
      this.$store.commit("SET_DUMMY_SPOT", spots);
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
      opacity: 0.5;
      background-color: black;
      padding: 20px;
      margin: 15px;
      color: white;
    }
  }
}
</style>
