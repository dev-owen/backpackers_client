<template>
  <div class="modal-mask" v-on:click="emitToParent($event)">
    <div class="login">
      <div class="login-form">
        <div class="login-title">
          <p>Welcome to</p>
          <p>BACKPACKERS</p>
        </div>
        <div class="login-inputbox">
          <input
            v-model="userInfo['username']"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="login-inputbox">
          <input
            v-model="userInfo['password']"
            type="password"
            placeholder="Password"
          />
        </div>
        <button class="login-button" v-on:click="logIn">
          Log in
        </button>
        <p class="notice">
          Forgot your login details? <span>Get help signing in.</span>
        </p>
        <button class="google-login" v-on:click="googleLogin">
          <div><img src="../assets/google-logo.png" /></div>
          <div><span>Log in with Google</span></div>
        </button>
        <p class="notice">Don't have an account? <span>Sign up.</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  props: ["display"],
  data() {
    return {
      displayModal: this.display,
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    emitToParent(event) {
      const loginModal = document.querySelector(".login");
      if (event.target === loginModal) {
        this.$emit("childToParent", !this.displayModal);
      }
    },
    logIn() {
      const { username, password } = this.userInfo;
      if (username !== "" && password !== "") {
        this.$store.commit("SET_LOGIN_STATUS", true);
        this.$store.commit("SET_USER", this.userInfo);
        this.$emit("childToParent", !this.displayModal);
      }
    },
    googleLogin() {
      alert("Log in with Google");
    }
  }
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .login {
    display: table-cell;
    vertical-align: middle;

    .login-form {
      width: 350px;
      height: 500px;
      margin: 0px auto;
      padding: 30px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      background-image: linear-gradient(
        to right,
        #f6cd00,
        #f0af0b 50%,
        #efa90e
      );
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;

      .login-title {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        font-family: "Baloo 2", sans-serif;
        font-size: 42px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: -0.6px;
        text-align: center;
        color: #ffffff;

        p {
          margin-block-start: 0.3em;
          margin-block-end: 0.3em;
        }

        p:nth-child(2) {
          background: linear-gradient(to right, #5369f1, #6242c4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          text-shadow: none;
        }
      }

      .login-inputbox {
        width: 280px;
        height: fit-content;
        margin: 20px auto;
        padding: 5px 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.3);

        input {
          width: fit-content;
          height: 100%;
          padding: 4px 0;
          border: 0;
          border-radius: 10px;
          background-color: transparent;
          font-size: 24px;
          color: white;
          font-family: "Baloo 2", sans-serif;
        }

        input:focus {
          outline: 0;
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.7);
          font-family: "Baloo 2", sans-serif;
        }
      }

      .login-button {
        width: 280px;
        height: fit-content;
        margin: 0px auto;
        padding: 6px 0;
        border-radius: 10px;
        background-color: transparent;
        border: 2px solid rgba(255, 255, 255, 0.3);
        font-family: "Baloo 2", sans-serif;
        font-size: 24px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
      }

      .login-button:focus {
        outline: none;
      }

      .notice {
        color: rgba(255, 255, 255, 0.7);
        font-size: 13px;
        font-family: "Baloo 2", sans-serif;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;

        span {
          font-weight: 600;
          color: white;
          text-decoration: underline;
        }
      }

      .google-login {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        width: 280px;
        height: fit-content;
        margin: 0px auto;
        padding: 12px 0 4px;
        border-radius: 10px;
        background-color: white;
        font-family: "Baloo 2", sans-serif;
        border: 0;
        font-size: 24px;
        font-weight: 500;
        color: rgba(#4d4d4d, 0.7);
        div {
          margin: 0 5px;
        }
        div:first-child {
          padding: auto 0;
          vertical-align: center;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }

      .google-login:focus {
        outline: none;
      }
    }
  }
}
</style>
