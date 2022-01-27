// Doc: https://nuxtjs.org/guide/vuex-store/
export const state = () => ({
  loveAnimal: {
    text: '',
    image: '',
  },
});

export const getters = {
  showAnimalText: (state) => {
    const animalObject = state.loveAnimal;
    if (animalObject && animalObject.text) {
      return `getter 知道你喜歡的動物是${animalObject.text}`
    } else {
      return `getter 不知道你喜歡的動物是什麼`
    }
  }
}

export const mutations = {
  setLoveAnimal(state, animalObject) {
    state.loveAnimal = animalObject || {};
  },
};
