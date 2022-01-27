<template>
    <div class="testNoteLayout">
        <div class="chenblock--header">
          <nuxt-link class="navigation-link" to="/">練習筆記-銓</nuxt-link>
          <nuxt-link class="navigation-link" to="/createProjectNote">部署/建立筆記-銓</nuxt-link>
          <nuxt-link class="navigation-link" to="/ModelCollectionArea">公仔照片筆記-銓</nuxt-link>
          <nuxt-link class="navigation-link" to="/TestGetSomethingFromOutside">抓抓-銓</nuxt-link>
          <nuxt-link class="navigation-link" to="/imageAnimation">圖片動畫測試-銓</nuxt-link>
          <nuxt-link class="navigation-link" to="/PickYourLoveAnimalToStore">你喜歡什麼動物呢-銓</nuxt-link>
          <nuxt-link class="navigation-link" to="/ScrollLikePixelPage">滾動調整-銓</nuxt-link>
        </div>
        <div class="testNote-body">
          <Nuxt ref="main-block" />
        </div>
      <div v-if="!!animal" class="love-animal-block">
        <p v-if="!animal.text">你不喜歡小動物嗎？</p>
        <p v-else>這裡是state，要自己打才知道你喜歡的動物是：{{ animal.text }}</p>
        <p>{{ getterAnimal }}</p>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return ({
    })
  },
  computed: {
    animal() {
      return this.$store.state.loveAnimal || {};
    },
    getterAnimal() {
      return this.$store.getters.showAnimalText;
    }
  }
};
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  .testNoteLayout {
    .chenblock--header {
      height: 60px;
      background-color: #f5f5dc;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .navigation-link {
        margin: 0 15px;
        padding: 5px;
        border: 1px solid black;
        color: black;
      }
      .navigation-link:hover {
        color: white;
        border: 1px solid blueviolet;
        background: black;
      }
    }
    .testNote-body {
      margin: 20px 20px 80px;
    }
    .love-animal-block {
      position: fixed;
      bottom: 20px;
      left: 20px;
      border: 1px solid blue;
      padding: 0 20px;
      background-color: wheat;
    }
  }
</style>