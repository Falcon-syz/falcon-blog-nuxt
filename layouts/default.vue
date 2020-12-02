<template>
  <div>
    <Header ref="header"></Header>
      <Nuxt :style="{paddingTop:navHeight+'px'}"/>
    <Footer></Footer>
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  components: {
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
