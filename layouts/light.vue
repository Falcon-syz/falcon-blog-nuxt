<template>
  <div>
    <LightHeader></LightHeader>
    <div class="container">
      <a-row :gutter="{ lg: 30, xs: 0 }">
        <a-col :lg="{ span: 18 }" :xs="{ span: 24 }">
          <Nuxt />
        </a-col>
        <a-col :lg="{ span: 6 }" :xs="{ span: 0 }">
          <div style="padding: 40px 0 20px 0">
            <p style="color: #232a31; font-size: 0.875rem; letter-spacing: 5px">
              搜索&nbsp;/&nbsp;SEARCH
            </p>
            <a-divider />
            <p>
              <a-input-search size="large" placeholder="搜点什么吧..." />
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
    <Footer></Footer>
    <div class="my-fixed">
      <div class="ant-back-top-inner hiden">
        <a-icon type="heart" style="transform: translateY(-5px)" />
      </div>
      <div class="ant-back-top-inner hiden">
        <a-icon
          type="share-alt"
          style="transform: translateY(-5px); font-size: 24px"
        />
      </div>
    </div>

    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
  </div>
</template>

<script>
import LightHeader from "@/components/layout/LightHeader";
import Footer from "@/components/layout/Footer";

export default {
  components: {
    LightHeader,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@media screen and(max-width: 812px) {
  .hiden {
    display: none;
  }
  /deep/.ant-back-top {
    right: 20px !important;
    bottom: 50px !important;
  }
}
/deep/.ant-back-top {
  right: 25px;
  bottom: 60%;
}
.anticon {
  transform: translateY(-0.2rem);
}
.my-fixed {
  position: fixed;
  right: 20px;
  bottom: 65%;
}

.ant-back-top-inner {
  margin-top: 5px;
  transition: all 0.5s;
  height: 45px;
  width: 45px;
  line-height: 45px;
  border-radius: 4px;
  background-color: rgb(35, 42, 49);
  color: rgb(109, 118, 133);
  text-align: center;
  font-size: 20px;
  &:hover {
    background-color: rgb(17, 24, 31);
    color: #fff;
  }
}
/deep/.ant-input {
  border: none;
  background: rgb(244, 244, 245);
  border-radius: 5px;
}
</style>
