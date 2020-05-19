<template>
  <div class="user">
    <div class="user-profile-img">
      <img src="../assets/user-profile.png" alt="user" />
    </div>
    <div class="user-info">
      <div class="user-name">
        {{ this.$store.state.user.username || "Username" }}
      </div>
      <div class="user-location">
        <span><img src="../assets/pin-location.png" alt="pin"/></span>
        <span>Seoul, South Korea</span>
      </div>
      <div class="user-hashtags">
        <div class="hashtag ht-yellow">enthusiastic</div>
        <div class="hashtag ht-green">nature</div>
        <div class="hashtag ht-skyblue">ocean</div>
        <div class="hashtag ht-purple">instagrammable</div>
      </div>
    </div>
  </div>
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

  .user-profile-img {
    margin: 0 auto;
    width: max-content;

    img {
      width: 300px;
      height: 300px;
    }
  }

  .user-info {
    font-family: "Baloo 2", sans-serif;
    text-align: center;

    .user-name {
      font-size: 36px;
    }

    .user-location {
      font-size: 24px;
      margin-bottom: 10px;

      span img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .user-hashtags {
    display: inline-flex;
    font-size: 16px;

    .hashtag {
      padding: 3px 8px;
      margin: 0 7px;
      border-radius: 4px;

      &.ht-skyblue {
        background-color: skyblue;
      }

      &.ht-green {
        background-color: greenyellow;
      }

      &.ht-purple {
        background-color: rebeccapurple;
        color: white;
      }

      &.ht-yellow {
        background: yellow;
      }
    }
  }
}
</style>
