<template>
  <div class="user">This is {{ this.$store.state.user.username }} Profile.</div>
</template>

<script>
export default {
  name: "User"
};
</script>

<style scoped lang="scss">
.user {
  padding: 50px;
  margin: 0 -8px;
}
</style>
