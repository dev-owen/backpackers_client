<template>
  <div class="travelspot-list">
    <div v-bind:key="spot.id" v-for="spot in spots">
      <TravelSpot v-bind:content="spot" />
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
      spots: []
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
    width: 200px;
    height: 200px;
    border: 1px solid grey;
    padding: 20px;
    margin: 15px;
  }
}
</style>
