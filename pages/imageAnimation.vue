<template>
  <div class="imageAnimation-page">
    <a href="https://animate.style/" target="_blank">參考文件</a>
    <div class="animation-list-block">
      <p
        class="show-button"
        @click="animationButtonListShow = !animationButtonListShow"
      >
        按
      </p>
      <div
        class="animation-list"
        :style="{ 'max-height': animationButtonListShow ? '200px' : '0px' }"
      >
        <p
          v-for="animation in animationListText"
          :key="animation"
          @click="giveImageAnimation(animation)"
        >
          {{ animation }}
        </p>
      </div>
    </div>
    <div class="image-block-1">
      <img src="~/assets/configAndCommonImage/KHDpWda.gif" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "testNoteLayout",
  name: "imageAnimation",
  data() {
    return {
      animationButtonListShow: false,
      animationListText: ["bounce", "flash"],
    };
  },
  methods: {
    giveImageAnimation(animationText) {
      console.log("animationText", animationText);
    },
  },
  head() {
    return {
      title: "圖片動畫筆記-銓",
    };
  },
};
</script>

<style scoped lang="scss">
.imageAnimation-page {
  .image-block-1 {
    margin: 0 auto;
    width: 60%;
    img {
      width: 100%;
      animation: ease-in 5s bounce;
    }
  }
  .animation-list-block {
    position: fixed;
    right: 2%;
    text-align: right;
    .show-button {
      display: inline-block;
      background-color: rgba(0, 175, 22, 0.7);
      border-radius: 100%;
      padding: 12px;
      cursor: pointer;
    }
    .show-button:hover {
      background-color: rgba(0, 175, 22, 1);
    }
    .show-button:active {
      background-color: rgb(4, 99, 16);
    }
    .animation-list {
      background-color: rgba(192, 189, 189, 0.623);
      text-align: center;
      transition: max-height 2s;
      animation: ease-in-out;
      overflow: hidden;
      p {
        cursor: pointer;
        padding: 0 10px;
      }
      p:hover {
        background-color: black;
        color: white;
      }
    }
  }
  @keyframes bounce {
    0% { transform: translate(0%, 0%); }
    50% { transform: translate(0%, 50%); }
    100% { transform: translate(0%, 0%); }
  }
}
</style>