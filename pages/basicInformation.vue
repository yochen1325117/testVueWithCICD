<template>
  <div class="basicInformation-page">
    <p>人生軌跡</p>
    <div class="portal">
      傳送門s
      <div class="portal-link-block">
        <a class="node">程式技能</a
        >
        <a class="node">語言技能</a>
        <a class="node">成長足跡</a>
        <a class="node">興趣</a>
        <a class="node">關於我</a>
      </div>
    </div>
    <div id="coding-skill" class="coding-skill information-block">
      <CollapseComponent collapseTitle="程式技能">
        <div class="information-text-block">
          <p class="information-text">網頁框架類: react、vue(nuxt)</p>
          <p class="information-text">語言類: javescript、html、css</p>
          <p class="information-text">其他類: scss、git、nvm(npm)</p>
        </div>
      </CollapseComponent>
    </div>
    <div id="language-skill" class="language-skill information-block">
      <CollapseComponent collapseTitle="語言技能">
        <div class="information-text-block">
          <p class="information-text">中文(可溝通、書寫)</p>
          <p class="information-text">英文(略懂)</p>
          <p class="information-text">台語(可溝通)</p>
        </div>
      </CollapseComponent>
    </div>
    <div id="learning-history" class="learning-history information-block">
      <CollapseComponent collapseTitle="學習歷程">
        <div class="information-text-block">
          <p class="information-text">
            長榮大學資訊管理學系(2016畢業)<br />負責當學生
          </p>
          <p class="information-text">
            104人力銀行-人才種子計畫(2017/08)<br />負責當學生
          </p>
          <p class="information-text">
            104人力銀行-<a target="_blank" href="https://senior.104.com.tw"
              >高年級</a
            >(2017/11/27-至今)<br />負責當前端
          </p>
        </div>
      </CollapseComponent>
    </div>
    <div id="hobby" class="hobby information-block">
      <CollapseComponent collapseTitle="興趣推薦">
        <div class="information-text-block">
          <p class="information-text">可愛小動物派(貓、狗...)</p>
          <p class="information-text">看電影(推薦)</p>
          <p class="information-text">聽音樂(推薦)</p>
          <p class="information-text">玩遊戲(推薦)</p>
        </div>
      </CollapseComponent>
    </div>
    <div id="aboutMe" class="aboutMe information-block">
      <CollapseComponent collapseTitle="關於我這個人">
        <div class="information-text-block">
          <p class="information-text">
            名字/稱呼: 陳友銓 / 友銓 / yo.chen / yo
          </p>
          <p class="information-text">圖片暫缺</p>
          <p class="information-text">形容暫缺</p>
          <p class="information-text">個性暫缺</p>
        </div>
      </CollapseComponent>
    </div>
  </div>
</template>

<script>
import CollapseComponent from "~/components/CollapseComponent";

export default {
  name: "basicInformation",
  layout: "default",
  components: {
    CollapseComponent,
  },
  data() {
    return {
      foldObject: {
        "coding-skill": false,
        "language-skill": false,
        "learning-history": false,
        hobby: false,
        aboutMe: false,
      },
    };
  },
};
</script>

<style lang="scss">
.basicInformation-page {
  width: 70%;
  margin: 40px auto;
  @media (max-width: 675px) {
    width: 90%;
  }
  .portal {
    .portal-link-block {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 20px 0;
      @media (max-width: 675px) {
        display: block;
        margin: 20px;
      }
      .node {
        border: 1px solid #7ab8cc;
        padding: 5px 15px;
        border-radius: 14px;
        text-decoration: none;
        color: #80adff;
        transition: transform 0.5s ease-in-out;
        cursor: pointer;
        @media (max-width: 675px) {
          display: inline-block;
          margin: 10px 15px;
        }
      }
      .node:active {
        background-color: #b399ff;
        opacity: 0.5;
        color: #003366;
        font-weight: bold;
      }
      .node:hover {
        transform: scale(1.2);
        transition: transform 0.5s ease-in-out;
      }
    }
  }
  .information-block {
    border: 2px inset black;
    margin: 20px 0;
    padding: 15px;
    .information-title {
      position: relative;
      font-size: 1.5rem;
      color: orangered;
      margin: 5px 0 0;
    }
    .information-text {
      margin: 2px 0 8px 1rem;
    }
  }
}
</style>