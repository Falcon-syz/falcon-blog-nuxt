<template>
<transition name="slide-fade">
  <div id="bottomBox" class="box-bottom" v-show="isShowBottom">
    <div class="action-btn">
      <a-icon type="heart" />
    </div>
    <div class="action-btn">
      <a-icon type="share-alt" />
    </div>
  </div>
</transition>
</template>

<script>
import { isMobile } from "@/utils/common.js";

export default {
  components: {},
  props: {},
  data() {
    return {
      scrollHeight: 0,
      isShowBottom: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  updated() {},
  methods: {
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.scrollHeight;
      this.scrollHeight = scrollTop;
      if (scroll < 0) {
        if (isMobile()) {
          this.isShowBottom = true;
        }
      } else {
         if (isMobile()) {
          this.isShowBottom = false;
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.slide-fade-enter-active {transition: all .2s ease;}
.slide-fade-leave-active {transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.slide-fade-enter, .slide-fade-leave-to{transform: translateY(58px);}
.box-bottom {
  transition: all 0.5s;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 58px;
  background: #fff;
  box-shadow: 0px -5px 20px 0px rgba(17, 58, 93, 0.1);
  z-index: 999;
  display: flex;
  .action-btn {
    flex: 1;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
  }
}
</style>