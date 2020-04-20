<template>
  <div class="main">
    <NavBar />
    <MainTitle />
    <TravelSpotList />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar";
import MainTitle from "../components/MainHook";
import TravelSpotList from "../components/TravelSpotList";
export default {
  name: "Main",
  components: {
    NavBar,
    TravelSpotList,
    MainTitle
  }
};
</script>
