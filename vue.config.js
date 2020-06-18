module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/utils/imagePath.scss";`
      }
    }
  }
};
