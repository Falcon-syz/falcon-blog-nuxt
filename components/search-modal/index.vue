<template>
  <div>
    <transition name="fade-inout">
      <div class="s-modal-mask" @click="onCloseModal" v-show="visible"></div>
    </transition>
    <transition name="slide-fade">
      <div class="s-modal-container" v-show="visible">
        <div class="close-btn" @click="onCloseModal">
          <a-icon type="close-circle" theme="filled" />
        </div>
        <div>
          <div
            class="media-content"
            :style="`background-image: url('https://static.is26.com/uploads/2019/06/yasuko-1.jpg');`"
          >
            <a-input-search
              placeholder="请输入关键词"
              class="search-modal"
              size="large"
              @search="onSearch"
            />
          </div>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 15px; font-size: 16px; font-weight: 500">
            <a-icon
              type="fire"
              theme="filled"
              style="
                font-size: 26px;
                color: rgb(226, 62, 87);
                transform: translateY(-5px);
              "
            />&nbsp;&nbsp;热门搜索
          </div>
          <a-tag color="rgb(244, 244, 245)" style="color: rgb(109, 118, 133)">
            java
          </a-tag>
          <a-tag color="rgb(244, 244, 245)" style="color: rgb(109, 118, 133)">
            vue
          </a-tag>
          <a-tag color="rgb(244, 244, 245)" style="color: rgb(109, 118, 133)">
            nuxt.js
          </a-tag>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  model: {
    prop: "visible",
    event: "change",
  },
  props: {
    visible: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  methods: {
    onSearch() {},
    onCloseModal() {
      this.$emit("change", false);
    },
  },
};
</script>

<style scoped lang="less">
.fade-inout-enter-active {
  transition: all 0.5s ease;
}
.fade-inout-leave-active {
  transition: all 0.5s ease;
}
.fade-inout-enter,
.fade-inout-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
.s-modal-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(120, 129, 147, 0.22);
  backdrop-filter: blur(10px);
  z-index: 1031;
}
.s-modal-container {
  position: fixed;
  top: 30%;
  left: 28%;
  width: 45%;
  background: #fff;
  z-index: 1040;
  border-radius: 4px;
  box-shadow: 0 10px 50px -5px rgba(6, 39, 67, 0.12);
}
.media-content {
  height: 250px;
  /* transform: scale(1.05); */
  background-position: center;
  /* filter: blur(1px); */
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.modal-body {
  padding: 30px 40px;
}
/deep/.ant-tag {
  font-size: 14px;
  height: 25px;
  text-align: center;
  cursor: pointer;
}
.search-modal {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  /deep/.ant-input {
    border-radius: 20px;
  }
}
.close-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: rgb(53, 55, 56);
  }
}
@media screen and (max-width: 812px) {
  .search-modal {
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    /deep/.ant-input {
      border-radius: 20px;
    }
  }
  .s-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1040;
    border-radius: 4px;
    box-shadow: 0 10px 50px -5px rgba(6, 39, 67, 0.12);
  }
}
</style>