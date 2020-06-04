<template>
  <div class="travelspot-list">
    <div v-bind:key="spot.id" v-for="(spot, index) in this.$store.state.spots">
      <TravelSpot v-bind:content="spot" v-bind:rating="index + 1" />
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
  }
};
</script>

<style scoped lang="scss">
.travelspot-list {
  display: flex;
  flex-wrap: wrap;

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
</style>
