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
        <button id="show-modal" v-on:click="showModal()">Log in</button>
      </div>
      <div>{{ getUserInfo }}</div>
    </span>
    <LoginModal
      v-if="displayModal"
      v-bind:display="displayModal"
      v-on:childToParent="onChildClick"
    />
  </div>
</template>

<script>
import LoginModal from "./LoginModal.vue";

export default {
  name: "Navbar",
  components: {
    LoginModal
  },
  data() {
    return {
      displayModal: false,
      login: false
    };
  },
  methods: {
    showModal() {
      this.displayModal = true;
    },
    onChildClick(value) {
      this.displayModal = value;
    }
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.GET_USER.username;
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
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
    background: linear-gradient(to right, #5369f1, #6242c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

      button {
        border: transparent;
        background-color: transparent;
        font-size: 20px;
        color: white;
        padding: 0;
      }

      button:focus {
        outline: 0;
      }
    }
  }
}
</style>
