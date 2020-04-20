<template>
  <div class="main">
    <MainTitle />
    <TravelSpotList />
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from "../components/MainHook";
import TravelSpotList from "../components/TravelSpotList";
export default {
  name: "Main",
  components: {
    TravelSpotList,
    MainTitle
  }
};
</script>
