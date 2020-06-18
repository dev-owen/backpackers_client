<template>
  <div class="travelspot" v-bind:class="spot.country" v-on:click="showDetail">
    <div class="content-top">#{{ this.rating }}</div>
    <div class="content-middle">
      <div class="spot-name">{{ spot.spotName.substring(0, 15) }}</div>
      <div class="spot-location">{{ spot.region }}, {{ spot.country }}</div>
    </div>
    <div class="content-bottom">
      <div class="spot-category">Category</div>
      <div class="spot-star-rate">{{ spot.starRate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelSpot",
  props: {
    content: {
      type: Object,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      spot: this.content
    };
  },
  methods: {
    showDetail() {
      const nowSpot = this.spot;
      this.$store.commit("SET_NOWSPOT", nowSpot);
      // 여기에서 /spot/:spotname 으로 이동
      this.$router.push(`spot/${this.spot.id}`);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../utils/imagePath.scss";

.travelspot {
  font-family: HelveticaNeue, sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  padding: 20px;

  & .KOR {
    background: linear-gradient(
        rgba(0, 0, 0, 0.5) 100%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      $korea;
    background-size: cover;
  }

  & .FRA {
    background: linear-gradient(
        rgba(0, 0, 0, 0.5) 100%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      $france;
    background-size: cover;
  }

  .content-top {
    text-align: left;
    height: fit-content;
    font-size: 28px;
    font-weight: 700;
  }

  .content-middle {
    margin: 10px auto;
    width: fit-content;
    height: fit-content;
    padding: 20px 0;

    .spot-name {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .spot-location {
      height: fit-content;
      font-size: 24px;
      padding: 10px;
    }
  }

  .content-bottom {
    height: fit-content;
    display: flex;
    flex-direction: row;
    font-size: 24px;

    .spot-category {
      margin-right: auto;
    }

    .spot-star-rate {
      margin-left: auto;
      font-weight: 700;
    }
  }
}
</style>
