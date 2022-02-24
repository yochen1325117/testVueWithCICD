<script>
export default {
  name: "CollapseComponent",
  props: {
    collapseTitle: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    collapseClick: function () {
      this.$data.collapse = !this.$data.collapse;
    },
  },
};
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
