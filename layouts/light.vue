<template>
  <div>
    <LightHeader></LightHeader>
    <div class="container">
      <a-row :gutter="{ lg: 30, xs: 0 }">
        <a-col :lg="{ span: 18 }" :xs="{ span: 24 }">
          <Nuxt ref="nuxtComponent" />
        </a-col>
        <a-col :lg="{ span: 6 }" :xs="{ span: 0 }">
          <div
            style="padding: 40px 0 20px 0"
            :class="{ 'scroll-fix-top': isFixed }"
          >
            <p style="color: #232a31; font-size: 0.875rem; letter-spacing: 5px">
              搜索&nbsp;/&nbsp;SEARCH
            </p>
            <a-divider class="divider-my"></a-divider>
            <p>
              <a-input-search size="large" placeholder="搜点什么吧..." />
            </p>
          </div>
          <div>&nbsp;</div>
        </a-col>
      </a-row>
    </div>
    <Footer></Footer>
    <div class="my-fixed">
      <a-badge :count="likeCount" class="hiden">
        <a-tooltip placement="left">
          <template slot="title">
            <span>点个赞</span>
          </template>
          <div class="ant-back-top-inner">
            <a-icon type="heart" style="transform: translateY(-5px)" />
          </div>
        </a-tooltip>
      </a-badge>

      <a-tooltip placement="left">
        <template slot="title">
          <span>分享本文</span>
        </template>
        <div class="ant-back-top-inner hiden">
          <a-icon
            type="share-alt"
            style="transform: translateY(-5px); font-size: 24px"
          />
        </div>
      </a-tooltip>
    </div>

    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    <BottomActions></BottomActions>
  </div>
</template>

<script>
import BottomActions from "@/components/layout/BottomActions";
import LightHeader from "@/components/layout/LightHeader";
import Footer from "@/components/layout/Footer";

export default {
  components: {
    BottomActions,
    LightHeader,
    Footer,
  },
  data() {
    return {
      likeCount: 0,
      isFixed: false,
    };
  },
  mounted() {
    // console.log(this.$refs['nuxtComponent'].$children[0].data.like)
    this.likeCount = this.$refs["nuxtComponent"].$children[0].data.like;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 78) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.scroll-fix-top {
  width: 300px;
  position: fixed;
  top: 0;
}
@media screen and(max-width: 812px) {
  .hiden {
    display: none;
  }
  /deep/.ant-back-top {
    right: 20px !important;
    bottom: 70px !important;
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
.divider-my {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 2px;
    background: rgb(17, 24, 31);
  }
}
</style>
