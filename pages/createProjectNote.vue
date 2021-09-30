<template>
  <div class="createProjectNote-page">
    <div class="note-block">
      <p class="note-title">nuxt 建立</p>
      <p class="note-content">npx create-nuxt-app project-name</p>
    </div>
    <div class="note-block">
      <p class="note-title">github 與 travic 連接</p>
      <p class="note-content">
        <img src="@/assets/noteImage/noteGithubToTravis.png" />
      </p>
    </div>
    <div class="note-block">
      <p class="note-title">travic 執行檔 .travis.yml(只會動的那種)</p>
      <p class="note-content">
        <pre class="code-block">
            language: node_js
        node_js:
            - node
        install:
            - npm install
        script:
            - npm run build
            - npm run generate
        </pre>
      </p>
    </div>
    <div class="note-block">
      <p class="note-title">github page 連結</p>
      <p class="note-content">github -> project page -> setting -> page</p>
      <img src="@/assets/noteImage/githubPageSettingPage.png" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "testNoteLayout",
  name: "createProjectNote",
  head() {
    return {
      title: "建立筆記-銓",
    };
  },
};
</script>

<style scoped lang="scss">
    .createProjectNote-page {
        margin: 30px auto;
        padding: 0 30px;
        .note-block {
            padding: 20px 0 0 20px;
            border: 2px solid greenyellow;
            margin: 20px 0;
            .note-title {
                font-size: 24px;
                font-weight: bold;
                margin: 0px 0px 10px
            }
            .note-content {
                font-size: 18px;
                margin: 0px 0px 25px 35px;
            }
            img {
                width: 100%;
            }
            pre {
                padding: 15px 0;
                background-color: rgba(0, 0, 0, 1);
                color: rgb(21,178,2);
            }
        }
    }
</style>