<template>
  <div class="PickYourLoveAnimalToStore">
    <p>PickYourLoveAnimalToStore</p>
    <div>
        <span>喜歡的動物：</span>
        <input type="text" v-model="animal" maxlength="10"/>
        <button @click="beforeSubmit">確認</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "testNoteLayout",
  data() {
    console.log('this.$store.state.loveAnimal', this.$store.state.loveAnimal)
    return {
        animal: (this.$store.state.loveAnimal && this.$store.state.loveAnimal.text) || ''
    };
  },
  methods: {
    beforeSubmit() {
        this.$store.commit('setLoveAnimal', {
            text: this.$data.animal,
            image: ''
        })
    }
  },
};
</script>

<style lang="scss">
.PickYourLoveAnimalToStore {
    // empty css
}
</style>