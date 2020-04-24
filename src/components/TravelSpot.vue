<template>
  <div class="travelspot" v-on:click="showDetail">
    <div>{{ spot.title }}</div>
  </div>
</template>

<script>
export default {
  name: "TravelSpot",
  props: ["content"],
  data() {
    return {
      spot: this.content
    };
  },
  methods: {
    showDetail() {
      alert(this.spot.title);
    }
  }
};
</script>

<style scoped></style>
