<script>
export default {
  name: 'FlyAwayImageComponent',
  props: {
    imageShow: {
      type: String,
      default: () => 'straight'
    },
    imageNumber: {
      type: Number,
      default: 0
    },
    modelData: {
        type: Object,
        defalut: {}
    }
  },
  data() {
      const imageZNumber = [];
      for(let i = 0; i < this.$props.imageNumber; i++) {
          imageZNumber[i] = i + 1;
      }
      return ({
        touchX: 0,
        touchY: 0,
        modelList: this.$props.modelData,
        imageZNumber,
        firstImageNum: 1,
      })
  },
  methods: {
    getTouchStart: function getTouchStart (event) {
      this.$data.touchList = event.changedTouches[0];
      event.changedTouches[0].target.offsetParent.style.transition = 'none';
    },
    touchmove: function touchmove(event) {
      const dragList = event.changedTouches && event.changedTouches[0];
      const touchList = this.$data.touchList;
      const touchX = Math.floor(dragList.pageX - touchList.pageX);
      const touchY = Math.floor(dragList.pageY - touchList.pageY);
      const target = touchList.target.offsetParent;
      target.style.transform = `translate(${touchX}px, ${touchY}px)`;
      this.$data.touchX = touchX
      this.$data.touchY = touchY
    },
    getTouchEnd: function getTouchEnd(event) {
        const eventList = event.changedTouches && event.changedTouches[0];
        const targetParent = eventList.target.offsetParent;
        this.$data.touchX = 0;
        this.$data.touchY = 0;
        targetParent.style.transition = 'transform 1s ease 0s';
        targetParent.style.transform = 'translate(0px, 0px)';
        if (this.$data.firstImageNum < this.$props.imageNumber) {
            this.$data.firstImageNum += 1
        } else {
            this.$data.firstImageNum = 1;
        }
    }
  }
}
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
