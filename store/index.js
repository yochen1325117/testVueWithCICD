// Doc: https://nuxtjs.org/guide/vuex-store/
export const state = () => ({
  loveAnimal: {
    text: '',
    image: '',
  },
});

export const mutations = {
  setLoveAnimal(state, animalObject) {
    state.loveAnimal = animalObject || {};
  },
};
