<template>
  <div class="main">
    <MainHook />
    <TravelSpotList />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHook from "../components/MainHook";
import TravelSpotList from "../components/TravelSpotList";
export default {
  name: "Main",
  components: {
    TravelSpotList,
    MainHook
  }
};
</script>
