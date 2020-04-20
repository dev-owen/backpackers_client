<template>
  <div class="main-content">
    <div class="catch-phrase">{{ message }}</div>
    <div class="travel-filter">
      <div class="country filter-selection">
        <div class="filter-sentence">
          Select the<br />
          <span>Country</span>
        </div>
        <div class="filter-button">
          <button>SOUTH KOREA</button>
        </div>
      </div>
      <div class="city-region filter-selection">
        <div class="filter-sentence">
          Select the<br />
          <span>City/Region</span>
        </div>
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
      message: `The world is \nmuch bigger than \nyou expected`
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
    white-space: pre;
    line-height: 1.25;
    letter-spacing: -0.68px;
  }

  .travel-filter {
    display: inline-flex;
    position: relative;
    width: 460px;
    height: 225px;
    top: 90px;
    margin-right: 50px;
    border: 1px solid white;
    opacity: 0.8;
    border-radius: 7.6px;
    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    flex-direction: column;

    .filter-selection {
      display: flex;
      padding: 35px 10px;
      margin: 5px;
      justify-content: space-around;
      border: 1px solid black;
      flex-direction: row;

      .filter-sentence {
        display: flex;
      }
    }
  }
}
</style>
