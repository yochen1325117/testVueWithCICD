<template>
    <div class="testNoteLayout">
        <div class="chenblock--header">
          <a class="navigation-link" href="/testVueWithCICD/">練習筆記-銓</a>
          <a class="navigation-link" href="/testVueWithCICD/createProjectNote">部署/建立筆記-銓</a>
          <a class="navigation-link" href="/testVueWithCICD/ModelCollectionArea">公仔照片筆記-銓</a>
          <a class="navigation-link" href="/testVueWithCICD/TestGetSomethingFromOutside">抓抓-銓</a>
        </div>
        <div class="testNote-body">
          <Nuxt ref="main-block" />
        </div>
    </div>
</template>
<script>
export default {
  beforeCreate(to, from, next) {
    console.log('beforeCreate');
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
      margin: 20px;
    }
  }
</style>