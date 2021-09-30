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
            - npm run deploy
        </pre>
      </p>
    </div>
    <div class="note-block">
      <p class="note-title">github page 連結</p>
      <p class="note-content">github -> project page -> setting -> page</p>
      <img src="@/assets/noteImage/githubPageSettingPage.png" />
    </div>
    <div class="note-block">
      <p class="note-title">nuxt 與 github page</p>
      <p class="note-content">github page 使用的是靜態檔案</p>
      <p class="note-content">nuxt 的靜態檔案需要build -> generate後存後在dist中</p>
      <p class="note-content">若直接連接github page https://yochen1325117.github.io/testVueWithCICD/ 會是404</p>
      <p class="note-content">https://yochen1325117.github.io/testVueWithCICD/dist 才會是頁面</p>
      <p class="note-content">因此使用push-dir 的套件 將 dist 推至某branch</p>
      <p class="note-content">再將github page 的brach指向dist的page</p>
      <p class="note-content">package.json 加入以下指令</p>
      <pre>
          "deploy": "nuxt generate && git add . && git commit -m 'dist file' && push-dir --dir=dist --branch=pageBranch --cleanup"
      </pre>
      <p class="note-content">建好dist檔案 -> 把dist 推到“pageBranch”(自己取的)</p>
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