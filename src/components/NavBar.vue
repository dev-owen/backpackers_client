<template>
  <div class="navbar">
    <span class="navbar-logo">
      <router-link to="/">BACKPACKERS</router-link>
    </span>
    <span class="navbar-link">
      <div>
        <router-link to="/about">About</router-link>
      </div>
      <div>
        Travel
      </div>
      <div>
        Upload
      </div>
      <div class="login-button">
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
  a {
    text-decoration: none;
    color: inherit;
  }
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
    font-size: 20px;
    color: white;

    div {
      vertical-align: middle;
      padding: 6px 12px;
      display: inline;
    }

    .login-button {
      padding: 6px 18px;
      border-radius: 7.7px;
      box-shadow: 4px 2px 3px 0 rgba(228, 157, 43, 0.4);
      background-image: linear-gradient(to right, #5369f1 0%, #6242c4 99%);
    }
  }
}
</style>
