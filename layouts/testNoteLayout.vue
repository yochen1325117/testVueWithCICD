<template>
    <div class="testNoteLayout">
        <div class="chenblock--header">
          <a href="/">練習筆記-銓</a>
        </div>
        <Nuxt ref="main-block" />
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: '練習筆記-銓'
    };
  },
};
</script>
<style lang="scss">
  .testNoteLayout {
    .chenblock--header {
      height: 60px;
      background-color: #f5f5dc;
    }
  }
</style>