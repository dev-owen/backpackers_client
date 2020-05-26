<template>
  <div class="now-spot">This is {{ spotname }} Profile.</div>
</template>

<script>
export default {
  name: "Spot",
  data() {
    return {
      spotname: ""
    };
  },
  created() {
    this.spotname = this.$store.getters.GET_SPOT.spotname;
  }
};
</script>

<style scoped lang="scss">
.now-spot {
  padding-top: 70px;
  margin: 0 -8px;
}
</style>
