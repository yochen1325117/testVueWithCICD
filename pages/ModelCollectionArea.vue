<template>
  <div class="ModelCollectionArea">
    <p>ModelCollectionArea</p>
    <div class="change-button-block">
      <div
        v-for="modelData in modelCollectionImageLinstJson"
        :key="`changeblock-${modelData.id}`"
      >
        <button @click="clickModel(modelData.id)">{{ modelData.title }}</button>
      </div>
    </div>
    <div v-if="seeNow && seeNow.id" class="collection-block">
      <p>作品來源: {{ seeNow.Origin }}</p>
      <p>標題: {{ seeNow.title }}</p>
      <p v-if="seeNow.content">內容介紹: {{ seeNow.content }}</p>
      <p v-if="seeNow.description">物品描述: {{ seeNow.description }}</p>
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
      <div class="straight-image-block--pc" v-if="imageShow === 'straight'">
        <div
          class="image-block"
          v-for="imageDataNumber in seeNow.imageNumber"
          :key="`${seeNow.id}_${seeNow.title}_${imageDataNumber}`"
        >
          <img
            :src="
              require(`@/assets/modelImage/${seeNow.id}${imageDataNumber}.jpg`)
            "
          />
        </div>
      </div>
      <FlyAwayImageComponent
        :imageNumber="seeNow.imageNumber"
        :modelData="seeNow"
        imageShow="straight"
      />
      <div>
        <div
          class="horizontal-image-block--pc"
          v-if="imageShow === 'horizontal'"
        >
          <button
            v-if="imageMove + seeNow.imageNumber > 1"
            @click="imageMoveLeft"
            class="image-move-left--button"
          >
            L
          </button>
          <div
            class="image-block"
            v-for="imageDataNumber in seeNow.imageNumber"
            :key="`${seeNow.id}_${seeNow.title}_${imageDataNumber}`"
            :style="{ transform: `translate(${imageMove * 400}px, 0px)` }"
          >
            <img
              class="horizontal-image"
              :src="
                require(`@/assets/modelImage/${seeNow.id}${imageDataNumber}.jpg`)
              "
            />
          </div>
          <button
            v-if="imageMove < 0"
            @click="imageMoveRight"
            class="image-move-right--button"
          >
            R
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelCollectionImageLinstJson from "@/static/modelCollectionImageLinstJson";
import FlyAwayImageComponent from "~/components/FlyAwayImageComponent";

export default {
  layout: "testNoteLayout",
  name: "ModelCollectionArea",
  components: {
    FlyAwayImageComponent,
  },
  data() {
    return {
      modelCollectionImageLinstJson,
      imageShow: "straight",
      imageMove: 0,
      seeNow: {},
    };
  },
  methods: {
    changeImageShowWay: function changeImageShowWay(way) {
      this.$data.imageShow = way;
    },
    imageMoveLeft: function imageMoveLeft() {
      this.$data.imageMove = this.$data.imageMove - 1;
    },
    imageMoveRight: function imageMoveRight() {
      this.$data.imageMove = this.$data.imageMove + 1;
    },
    clickModel: function clickModel(modelId) {
      const modelList = modelCollectionImageLinstJson.filter(
        (modelJsonData) => modelJsonData.id === modelId
      );
      this.$data.seeNow = (modelList && modelList[0]) || {};
      this.$data.imageMove = 0;
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
  .change-button-block {
    display: flex;
    button {
      margin: 0 20px;
      border: 2px solid black;
      border-radius: 4px;
      color: black;
      background-color: white;
      padding: 8px 10px;
    }
  }
  .collection-block {
    .straight-image-block--pc {
      @media (max-width: 675px) {
        display: none;
      }
      .image-block {
        display: block;
        img {
          width: 100%;
          border: 2px solid black;
        }
      }
    }
    .horizontal-image-block--pc {
      display: flex;
      overflow: hidden;
      height: 300px;
      padding: 20px 0;
      position: relative;
      @media (max-width: 675px) {
        display: none;
      }
      .image-block {
        margin: 5px 20px;
        height: 100%;
        transition: transform 1s;
        img {
          height: 100%;
          width: 350px;
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
    .horizontal-image-block--mobile {
      display: none;
      position: relative;
      @media (max-width: 675px) {
        display: block;
        position: relative;
        width: 100%;
        height: 300px;
        .image-block {
          width: 100%;
          position: absolute;
          transition: left 1s, right 1s;
        }
        .horizontal-image {
          width: 100%;
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
          z-index: 99;
        }
        .image-move-right--button {
          right: 0;
        }
        .image-move-left--button {
          left: 0;
        }
      }
    }
  }
}
</style>