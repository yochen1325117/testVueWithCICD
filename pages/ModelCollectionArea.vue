<template>
  <div class="ModelCollectionArea">
    <p>ModelCollectionArea</p>
    <div
      class="collection-block"
      :key="modelData.id"
      v-for="modelData in modelCollectionImageLinstJson"
    >
      <p>作品來源: {{ modelData.Origin }}</p>
      <p>標題: {{ modelData.title }}</p>
      <p v-if="modelData.content">內容介紹: {{ modelData.content }}</p>
      <p v-if="modelData.description">物品描述: {{ modelData.description }}</p>
      <p>圖片顯示方式:</p>
      <div class="change-image-show-button--block">
        <button
          @click="changeImageShowWay('straight')"
          class="image-show-button"
          :class="imageShow === 'straight' ? 'active-button' : ''"
        >
          直的
        </button>
        <button
          @click="changeImageShowWay('horizontal')"
          class="image-show-button"
          :class="imageShow === 'horizontal' ? 'active-button' : ''"
        >
          橫的
        </button>
      </div>
      <div class="straight-image-block" v-if="imageShow === 'straight'">
        <div
          class="image-block"
          v-for="imageDataNumber in modelData.imageNumber"
          :key="`${modelData.id}_${modelData.title}_${imageDataNumber}`"
        >
          <img
            :src="
              require(`@/assets/modelImage/${modelData.id}${imageDataNumber}.jpg`)
            "
          />
        </div>
      </div>
      <div>
        <div class="horizontal-image-block" v-if="imageShow === 'horizontal'">
          <button v-if="imageMove+modelData.imageNumber > 1" @click="imageMoveLeft" class="image-move-left--button">
            L
          </button>
          <div
            class="image-block"
            v-for="imageDataNumber in modelData.imageNumber"
            :key="`${modelData.id}_${modelData.title}_${imageDataNumber}`"
          >
            <img
              class="horizontal-image"
              :style="{ transform: `translate(${imageMove * 300}px, 0px)` }"
              :src="
                require(`@/assets/modelImage/${modelData.id}${imageDataNumber}.jpg`)
              "
            />
          </div>
          <button v-if="imageMove < 0" @click="imageMoveRight" class="image-move-right--button">
            R
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelCollectionImageLinstJson from "@/static/modelCollectionImageLinstJson";

export default {
  layout: "testNoteLayout",
  name: "ModelCollectionArea",
  data() {
    console.log("modelCollectionImageLinstJson", modelCollectionImageLinstJson);
    return {
      modelCollectionImageLinstJson,
      imageShow: "straight",
      imageMove: 0,
    };
  },
  methods: {
    changeImageShowWay: function changeImageShowWay(way) {
      this.$data.imageShow = way;
    },
    imageMoveLeft: function imageMoveLeft() {
      console.log("imageMoveLeft");
      this.$data.imageMove = this.$data.imageMove - 1;
    },
    imageMoveRight: function imageMoveRight() {
      console.log("imageMoveRight");
      this.$data.imageMove = this.$data.imageMove + 1;
    },
  },
  head() {
    return {
      title: "模型收藏區-銓",
    };
  },
};
</script>
<style scoped lang="scss">
.ModelCollectionArea {
  margin: 30px auto;
  padding: 0 30px;
  .collection-block {
    .straight-image-block {
      .image-block {
        display: block;
        img {
          width: 100%;
          border: 2px solid black;
        }
      }
    }
    .horizontal-image-block {
      display: flex;
      overflow: hidden;
      height: 300px;
      padding: 20px 0;
      position: relative;
      .image-block {
        margin: 5px 20px;
        height: 100%;
        img {
          height: 100%;
          width: 350px;
          transition: transform 1s;
          object-fit: scale-down;
        }
      }
      .image-move-right--button,
      .image-move-left--button {
        top: 50%;
        height: 150px;
        transform: translate(0px, -50%);
        background-color: rgba(192, 192, 192, 0.9);
        border-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        width: 50px;
        position: absolute;
        z-index: 2;
      }
      .image-move-right--button {
        right: 0;
      }
      .image-move-left--button {
        left: 0;
      }
    }
    .change-image-show-button--block {
      display: flex;
      padding: 20px 0;
      justify-content: center;
      align-items: center;
      .image-show-button {
        margin: 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        color: black;
        background-color: white;
        width: 100px;
        height: 30px;
      }
      .image-show-button:hover {
        border-color: brown;
        background-color: black;
        color: white;
      }
      .active-button {
        background-color: cadetblue;
      }
    }
  }
}
</style>