<template>
  <div class="ScrollLikePixelPage">
    <p>ScrollLikePixelPage</p>
    <div
      class="cat-img--block"
      v-for="(catData, index) in catImageList"
      :key="catData.img"
      :id="`cat-block-${index}`"
      :style="catData.blockStyle || {}"
    >
      <img
        :style="catData.imageStyle || {}"
        :src="catData.img"
        :alt="catData.text"
      />
      <div
        :style="catData.extraStyle || {}"
        v-if="index === 2"
        class="extra-special-block"
      >
        瞅啥瞅
      </div>
      <img
        src="https://www.missbebepet.com/wp-content/uploads/2021/12/7777-2.jpg"
        :style="catData.extraStyle || {}"
        v-if="index === 3"
        class="extra-special-block"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "testNoteLayout",
  mounted() {
    window.addEventListener("scroll", this.catScroll);
  },
  data() {
    return {
      catImageList: [
        {
          text: "暹羅貓貓",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/05/%E8%B2%93%E7%95%8C%E8%AE%8A%E8%89%B2%E9%BE%8D%E6%9A%B9%E7%BE%85%E8%B2%93-%E8%8A%B1%E8%89%B2-1024x683.jpg",
        },
        {
          text: "斯芬克斯",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/12/655555.jpg",
        },
        {
          text: "緬因貓貓",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/09/858.jpg",
        },
        {
          text: "孟加拉貓",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/09/1245.jpg",
        },
        {
          text: "小步舞曲",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/06/%E5%84%AA%E9%9B%85%E7%9A%84%E6%8B%BF%E7%A0%B4%E5%B4%99%E5%B0%8F%E6%AD%A5%E8%88%9E%E6%9B%B2-%E7%89%B9%E5%BE%B5.jpg",
        },
        {
          text: "曼赤肯",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/06/%E6%A3%AE%E6%9E%97%E8%A3%A1%E7%9A%84%E5%B0%8F%E7%B2%BE%E9%9D%88%E7%9F%AD%E8%85%BF%E8%B2%93%E6%9B%BC%E8%B5%A4%E8%82%AF-%E7%89%B9%E5%BE%B5.jpg",
        },
        {
          text: "美國短毛貓",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/07/2-3.jpg",
        },
        {
          text: "英國短毛貓",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/06/%E8%8B%B1%E5%9C%8B%E7%9F%AD%E6%AF%9B%E8%B2%93%E5%A4%A7%E8%A7%A3%E5%AF%86-%E8%8A%B1%E8%89%B2.jpg",
        },
        {
          text: "橘貓",
          img: "https://www.missbebepet.com/wp-content/uploads/2021/06/%E6%A9%98%E8%B2%93%E5%A4%A7%E8%A7%A3%E5%AF%86-%E8%8A%B1%E8%89%B2.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {
    catScroll: function () {
      const scrollY = window.scrollY;
      let catImageList = this.$data.catImageList;
      catImageList = catImageList.map((imageListData, index) => {
        const outputStyle = this.changeStyleByScroll(scrollY, index);
        imageListData.imageStyle = outputStyle.imageStyle;
        imageListData.extraStyle = outputStyle.extraStyle;
        return imageListData;
      });
      this.$data.catImageList = catImageList;
    },
    changeStyleByScroll: function (scrollY, index) {
      let output = {
        imageStyle: {},
        extraStyle: {},
      };
      const catElement = document.getElementById(`cat-block-${index}`);
      let translateNum = 0;
      switch (index) {
        case 0:
          const scaleNum =
            (catElement.offsetTop - scrollY / 10) / catElement.offsetTop;
          output = {
            imageStyle: {
              transform: `scale(${scaleNum > 0.7 ? scaleNum : 0.7})`,
            },
            extraStyle: {},
          };
          break;
        case 1:
          translateNum =
            ((scrollY * 2.1 - catElement.offsetTop) / catElement.offsetTop) *
            100;
          output = {
            imageStyle: {
              transform: `translate(${
                translateNum < 0 ? translateNum : 0
              }%, 0)`,
            },
            extraStyle: {},
          };
          break;
        case 2:
          translateNum = ((scrollY * 2 + 100) - catElement.offsetTop) / catElement.offsetTop;
          output = {
            extraStyle: {
              opacity: translateNum < 1 ? translateNum : 1
            },
          };
          break;
        case 3:
          translateNum = catElement.offsetTop - (scrollY - (50))
          if (translateNum < 0) { translateNum = 0 }
          else if (translateNum > 100) { translateNum = 100 }
          output = {
            imageStyle: {
              position: 'absolute',
              'clip-path': `polygon(0% 0%, 100% 0%, 100% ${translateNum * 0.9}%, 0% ${translateNum * 0.9}%)`
            },
          };
          break;
        default:
          output = {
            imageStyle: {},
            extraStyle: {},
          };
          break;
      }
      return output;
    },
  },
};
</script>

<style lang="scss">
.ScrollLikePixelPage {
  .cat-img--block {
    width: 80%;
    display: block;
    margin: 20px auto;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
  }
  #cat-block-2 {
    .extra-special-block {
      display: inline-block;
      position: absolute;
      top: 17%;
      left: 64%;
      background-color: white;
      padding: 5px 10px;
      border: 1px solid black;
      border-radius: 4px;
    }
  }
}
</style>