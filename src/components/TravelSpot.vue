<template>
  <div class="travelspot" v-on:click="showDetail">
    <div class="content-top">#{{ rate }}</div>
    <div class="content-middle">
      <div class="spot-name">{{ spot.title.substring(0, 15) }}</div>
      <div class="spot-location">Jeonju, KOR</div>
    </div>
    <div class="content-bottom">
      <div class="spot-category">Category</div>
      <div class="spot-star-rate">{{ randomStars }}</div>
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
      spot: this.content,
      rate: this.rating
    };
  },
  methods: {
    showDetail() {
      alert(this.spot.title);
    }
  },
  computed: {
    randomStars() {
      return Number((3 + Math.random() * 2).valueOf().toFixed(2));
    }
  }
};
</script>

<style scoped lang="scss">
.travelspot {
  font-family: HelveticaNeue, sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  padding: 20px;

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
