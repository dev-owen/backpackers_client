<template>
  <div class="navbar">
    <span class="navbar-logo">BACKPACKERS</span>
    <span class="navbar-link">
      <div>
        About
      </div>
      <div>
        Travel
      </div>
      <div>
        Upload
      </div>
      <div>
        Log in
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  width: 95.5vw;
  height: 50px;
  padding: 10px 40px 10px 25px;
  margin: -8px -8px 0;
  box-shadow: 3px 3px 5px 0 rgba(102, 102, 102, 0.5);
  font-family: "Baloo 2", sans-serif;
  background-image: linear-gradient(
    to right,
    #f6cd00,
    #f4c303 19%,
    #f0af0b 67%,
    #efa90e
  );

  span {
    /*vertical-align: middle;*/
  }

  .navbar-logo {
    font-size: 32px;
    font-weight: bold;
    color: #5369f1;
    margin-right: auto;
  }

  .navbar-link {
    padding-top: 8px;
    font-size: 24px;
    color: white;

    div {
      vertical-align: middle;
      padding: 10px;
      display: inline;
    }
  }
}
</style>
