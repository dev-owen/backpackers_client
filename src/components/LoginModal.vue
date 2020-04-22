<template>
  <div class="modal-mask">
    <div class="login">
      <div class="login-form">
        <div><span>ID</span><input type="text" /></div>
        <div><span>PW</span><input type="password" /></div>
        <div>
          <button class="login-submit"></button>
          <button class="login-cancel" v-on:click="emitToParent">cancel</button>
        </div>
        <div class="sign-up">
          SIGN UP
        </div>
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
      displayModal: this.display
    };
  },
  methods: {
    emitToParent() {
      this.$emit("childToParent", !this.displayModal);
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
      width: 300px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
    }
  }
}
</style>
