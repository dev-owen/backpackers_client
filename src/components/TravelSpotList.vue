<template>
  <div class="travelspot-list">
    <div v-bind:key="spot.id" v-for="(spot, index) in spots">
      <TravelSpot v-bind:content="spot" v-bind:rating="index + 1" />
    </div>
  </div>
</template>

<script>
import { fetchNews } from "../api";
import TravelSpot from "./TravelSpot";

export default {
  name: "TravelSpotList",
  data() {
    return {
      spots: [],
      rating: 1
    };
  },
  components: {
    TravelSpot
  },
  created() {
    fetchNews()
      .then(res => {
        this.spots = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="scss">
.travelspot-list {
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
</style>
