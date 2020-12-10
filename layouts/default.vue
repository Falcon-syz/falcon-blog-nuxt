<template>
  <div>
    <!--此图片必须放在body标签的最前面，且高度必须为屏幕宽度的80%,微信链接缩略图  -->
	<img src="../assets/img/wechat-small.jpg" style="position:absolute; top:0; left:0;  width: 80%; z-index:-1;opacity: 0; ">

    <Header ref="header"></Header>
      <Nuxt :style="{paddingTop:navHeight+'px'}"/>
    <Footer></Footer>
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    <BottomActions v-if="$route.query.tp"></BottomActions>
  </div>
</template>

<script>
import BottomActions from "@/components/layout/BottomActions";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  components: {
    BottomActions,
    Header,
    Footer,
  },
  data() {
    return {
      navHeight:0
    }
  },
  mounted() {
    this.navHeight = this.$refs['header'].$refs["navHead"].offsetHeight
  },
};
</script>

<style lang="less" scoped>
.ant-back-top {
bottom:70px;
}
.anticon{
transform: translateY(-.2rem);
}
.ant-back-top-inner {
  transition: all .5s;
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: rgb(35, 42, 49);
  color: rgb(109, 118, 133);
  text-align: center;
  font-size: 20px;
  &:hover{
    background-color: rgb(17, 24, 31);
    color:#fff;
  }
}
</style>
