<template>
  <div class="main-content">
    <div class="catch-phrase">{{ message }}</div>
    <div class="travel-filter">
      <div class="country filter-selection">
        <div class="filter-sentence">{{ selectCountry }}</div>
        <div class="filter-button">
          <button>SOUTH KOREA</button>
        </div>
      </div>
      <div class="city-region filter-selection">
        <div class="filter-sentence">{{ selectCity }}</div>
        <div class="filter-button">
          <button>JEONJU</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHook",
  data() {
    return {
      message: `The world is \nmuch bigger than \nyou expected`,
      selectCountry: `Select the \nCountry`,
      selectCity: `Select the \nCity/Region`
    };
  }
};
</script>

<style scoped lang="scss">
.main-content {
  display: flex;
  width: 100vw;
  height: 400px;
  background: url("../assets/korea-bkg.png") rgba(0, 0, 0, 0.5) center no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
  margin-left: -8px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  white-space: pre;

  .catch-phrase {
    display: inline-block;
    position: relative;
    width: fit-content;
    height: fit-content;
    padding: 15px;
    top: 90px;
    margin-left: 50px;
    text-align: left;
    color: white;
    font-size: 54px;
    font-weight: 600;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.25;
    letter-spacing: -0.68px;
  }

  .travel-filter {
    display: inline-flex;
    position: relative;
    width: 430px;
    height: 210px;
    top: 90px;
    margin-right: 50px;
    border: 1px solid white;
    opacity: 0.8;
    border-radius: 7.6px;
    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    flex-direction: column;
    justify-content: space-around;

    .filter-selection {
      display: flex;
      margin: 5px;
      justify-content: space-around;
      flex-direction: row;

      .filter-sentence {
        width: 100px;
        height: fit-content;
        display: flex;
        padding: 5px;
        font-size: 20px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: -0.28px;
        text-align: left;
        color: #384ace;
      }

      .filter-button button {
        width: 200px;
        height: 60px;
        border-radius: 5.7px;
        box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.25);
        background-image: linear-gradient(to right, #5369f1 0%, #6242c4 99%);
        font-size: 22px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.28;
        letter-spacing: normal;
        color: white;
      }

      button:focus {
        outline: 0;
      }
    }

    .filter-selection:nth-child(1) {
      padding: 20px 5px 10px;
    }

    .filter-selection:nth-child(2) {
      padding: 10px 5px 20px;
    }
  }
}
</style>
