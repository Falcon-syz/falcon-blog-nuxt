<template>
  <div class="main">
    <div class="container">
      <a-row :gutter="20">
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <div class="hoverContainer">
            <img
              class="hoverZoom"
              src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
              alt="图片丢了"
            />
          </div>
        </a-col>
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <a-row :gutter="20">
            <a-col :span="12" v-for="item in 4" :key="item">
              <div class="hoverInnerContainer">
                <img
                  class="hoverZoom"
                  src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
                  alt="图片丢了"
                />
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    
    }
  },
  computed: {},
  watch: {},
  created(){},
  mounted(){},
  updated(){},
  methods: {}
}
</script>

<style scoped>
.hoverInnerContainer {
  width: 100%;
  height: 19.35rem;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  margin-bottom:20px;
}
.hoverContainer {
  width: 100%;
  height: 40rem;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
}
.hoverZoom {
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.5s;
  transform: translate(-50%, -50%);
}
.hoverZoom:hover {
  height: 105% !important;
}
.main {
  background-color: rgb(22, 30, 39);
  color: #fff;
}
</style>