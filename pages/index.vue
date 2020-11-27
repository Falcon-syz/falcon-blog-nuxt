<template>
  <div class="main">
    <div class="container">
      <a-row :gutter="20">
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <img
            v-zoom
            src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
            alt="图片丢了"
            style="width: 100%"
          />
        </a-col>
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <a-row>
            <a-col :span="12">
              <img
                src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
                alt="图片丢了"
                style="width: 100%"
              />
            </a-col>
            <a-col :span="12">
              <img
                src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
                alt="图片丢了"
                style="width: 100%"
              />
            </a-col>
            <a-col :span="12">
              <img
                src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
                alt="图片丢了"
                style="width: 100%"
              />
            </a-col>
            <a-col :span="12">
              <img
                src="https://static.is26.com/blog/2019/06/newyork/nyc-143.JPG"
                alt="图片丢了"
                style="width: 100%"
              />
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
  mounted() {},
};
</script>

<style scoped>
.main {
  height: 2000px;
  background-color: rgb(22, 30, 39);
  color: #fff;
}
</style>
