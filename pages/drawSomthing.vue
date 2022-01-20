<template>
  <div class="drawSomthing">
    <p>drawSomthing</p>
    <input type="number" v-model="ballNumInput" @keydown.enter="makeBall" />
    <button>給我生</button>
    <div class="ballblock">
      <div
        v-for="ball in +ballNum"
        :key="`top_${ball}_ball`"
        class="ball"
        :class="Math.round(Math.random()*10) < 5 ? 'light': 'dark'"
        style="position: absolute"
        :style="{
          top: `${100 / ballNum}%`,
          left: `${(100 / ballNum) * ball}%`,
        }"
      />
      <div
        v-for="ball in +ballNum"
        :key="`top_left_${ball}_ball`"
        class="ball"
        :class="Math.round(Math.random()*10) < 5? 'light': 'dark'"
        style="position: absolute"
        :style="{
          top: `${(100 / ballNum) * ball}%`,
          left: `${(100 / ballNum) * ball}%`,
        }"
      />
      <div
        v-for="ball in +ballNum"
        :key="`left_${ball}_ball`"
        class="ball"
        :class="Math.round(Math.random()*10) < 5 ? 'light': 'dark'"
        style="position: absolute"
        :style="{
          top: `${(100 / ballNum) * ball}%`,
          left: `${100 / ballNum}%`,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "testNoteLayout",
  data() {
    return {
      ballNumInput: 0,
      ballNum: 0,
    };
  },
  methods: {
    makeBall() {
      this.ballNum = +this.ballNumInput;
    },
  },
};
</script>

<style lang="scss">
.drawSomthing {
  .ballblock {
    width: 100%;
    height: 500px;
    background: black;
    position: relative;
    .light {
      background: white;
    }
    .dark {
      background: black;
    }
    .ball {
      width: 15px;
      height: 15px;
      border-radius: 15px;
    }
  }
}
</style>