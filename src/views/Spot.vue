<template>
  <div class="spot">This is {{ spotname }} Profile.</div>
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
	}
</script>

<style scoped lang="scss">
  .spot {
    padding: 50px;
    margin: 0 -8px;
  }
