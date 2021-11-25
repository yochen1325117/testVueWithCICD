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
        :style="{ 'max-height': animationButtonListShow ? '900px' : '0px' }"
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
      animationListText: [
        "default",
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shakeX",
        "shakeY"
      ],
    };
  },
  methods: {
    giveImageAnimation(animationText) {
      console.log("animationText", animationText);
      document.getElementsByTagName("img")[0].className = animationText;
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
    width: 200px;
    img {
      width: 100%;
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
      transition: max-height 1s;
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
  .bounce {
    animation: 0.8s bounce infinite;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0%, -50px);
    }
    50% {
      transform: translate(0%, 0px);
    }
  }

  .flash {
    animation: 0.8s flash infinite;
  }
  @keyframes flash {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  .pulse {
    animation: 1s pulse infinite;
  }
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  .rubberBand {
    animation: 1s rubberBand infinite;
  }
  @keyframes rubberBand {
    0%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    25%,
    75% {
      transform: scale3D(1.5, 0.5, 1);
    }
    50% {
      transform: scale3D(1.25, 0.75, 1);
    }
  }
  .shakeX {
    animation: .5s shakeX infinite;
    animation-fill-mode: both;
  }
  @keyframes shakeX {
    0%, 100% {
      transform: translateX(0px);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(5px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(-5px);
    }
  }
    .shakeY {
    animation: .5s shakeY infinite;
    animation-fill-mode: both;
  }
  @keyframes shakeY {
    0%, 100% {
      transform: translateY(0px);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateY(5px);
    }
    20%, 40%, 60%, 80% {
      transform: translateY(-5px);
    }
  }
}
</style>