<template>
  <div class="main">
    <div class="container">
      <a-row :gutter="20">
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <div class="hoverContainer">
            <img
              class="hoverZoom"
              src="https://images.unsplash.com/photo-1614416811503-a2baf8ceb217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt="图片丢了"
            />
          </div>
        </a-col>
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <div class="mid-scroll-box">
            <a-row :gutter="{ xs: 8, lg: 20 }" class="w-200">
              <a-col
                :xs="{ span: 6 }"
                :lg="{ span: 12 }"
                v-for="item in 4"
                :key="item"
              >
                <div class="hoverInnerContainer">
                  <img
                    class="hoverZoom"
                    src="https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="图片丢了"
                  />
                </div>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style scoped lang="less">
@media screen and(max-width: 812px) {
  .hoverContainer {
    height: 22rem !important;
    margin-top: 10px;
  }
  .mid-scroll-box{
    width:100%;
    overflow-x: scroll;
  }
  .main {
  padding-bottom: 20px !important;
}
  .w-200{
    width:160%
  }
  .hoverInnerContainer {
    margin-top: 20px;
    height: 8rem !important;
    margin-bottom: 0 !important;
  }
}


.hoverInnerContainer {
  width: 100%;
  height: 19.35rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
  margin-bottom: 20px;
}
.hoverContainer {
  width: 100%;
  height: 40rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
}
.hoverZoom {
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.5s;
  transform: translate(-50%, -50%);
  &:hover {
    height: 105% !important;
    -webkit-filter: brightness(90%); /* Chrome, Safari, Opera */
    filter: brightness(90%);
  }
}

.main {
  background-color: rgb(22, 30, 39);
  color: #fff;
  padding-bottom: 40px;
}
</style>