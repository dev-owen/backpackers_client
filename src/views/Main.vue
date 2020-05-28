<template>
  <div class="main">
    <MainHook />
    <TravelSpotList />
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHook from "../components/MainHook";
import TravelSpotList from "../components/TravelSpotList";
import Spinner from "../components/Spinner";
import bus from "../utils/bus";

export default {
  name: "Main",
  components: {
    TravelSpotList,
    MainHook,
    Spinner
  },
  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  }
};
</script>
