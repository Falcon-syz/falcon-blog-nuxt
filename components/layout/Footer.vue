<template>
  <div class="globle-footer">
    <div class="container">
      <a-row :gutter="{ xs: 0, lg: 100 }">
        <a-col :lg="{ span: 12 }" :xs="{ span: 24 }">
          <h6 class="title-bar">关于</h6>
          <p style="font-size: 0.875rem; line-height: 1.8">
            2020年洛阳师范学院毕业，前端程序员。干饭能手。没在好大的公司任过职。博客更新全凭心情。没有多大抱负。安心做条咸鱼。<br />
            <span class="icon-link">
              <a
                href="https://www.antdv.com"
                class="link-style"
                target="_blank"
              >
                <a-icon type="github"
              /></a>
              <a href="https://www.antdv.com" class="link-style" target="_blank"
                ><a-icon type="weibo-circle"
              /></a>
              <a href="https://www.antdv.com" class="link-style" target="_blank"
                ><a-icon type="wechat"
              /></a>
            </span>
          </p>
        </a-col>
        <a-col :lg="{ span: 12 }" :xs="{ span: 24 }">
          <a-row :gutter="50">
            <a-col :lg="{ span: 12 }" :xs="{ span: 24 }">
              <h6 class="title-bar m-t20">社交媒体</h6>
              <p style="font-size: 0.875rem">
                <a
                  :href="item.url"
                  v-for="(item, index) in linkList"
                  :key="index"
                  target="_blank"
                  class="link-style"
                  >{{ item.name }}</a
                >
              </p>
            </a-col>
            <a-col :lg="{ span: 12 }" :xs="{ span: 24 }">
              <h6 class="title-bar m-t20">导航</h6>
              <p style="font-size: 0.875rem">
                <a
                  href="https://www.antdv.com"
                  target="_blank"
                  class="link-style"
                  >老版本入口</a
                >
              </p>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <a-divider />
    <a-row>
      <a-col>
        <div class="container">
          Copyright © 2020 孙亚铮的独立博客.
           <a  style="
                display: inline-block;
                text-decoration: none;
                height: 20px;
                line-height: 20px;
                color: rgb(109, 118, 133);
              " href=http://beian.miit.gov.cn/ target=_blank>豫ICP备20007499号</a>
            <a
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41030502000241"
              style="
                display: inline-block;
                text-decoration: none;
                height: 20px;
                line-height: 20px;
                color: rgb(109, 118, 133);
              "
              >&nbsp;&nbsp;<img src="@/assets/img/peian.png"/>
                豫公网安备 41030502000241号
             </a>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  head: {
    script: [],
  },
  components: {},
  props: {},
  data() {
    return {
      linkList: [
        {
          name: "YouTube",
          url: "https://www.antdv.com",
        },
        {
          name: "哔哩哔哩",
          url: "https://www.antdv.com",
        },
        {
          name: "Instagram",
          url: "https://www.antdv.com",
        },
        {
          name: "新浪微博",
          url: "https://www.antdv.com",
        },
      ],
    };
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
/deep/.ant-divider {
  background: rgb(35, 42, 49);
}
@media screen and (max-width: 812px) {
  .m-t20 {
    margin-top: 20px;
  }
}
.icon-link {
  font-size: 24px;
}
.title-bar {
  position: relative;
  padding-left: 10px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 15px;
    background: rgb(241, 35, 73);
  }
  color: #fff;
  font-size: 0.9375rem;
  letter-spacing: 5px;
}
.link-style {
  margin-right: 10px;
  text-decoration: none;
  color: rgb(109, 118, 133);
  transition: all 0.5s;
  &:hover {
    color: #fff;
  }
}
.globle-footer {
  padding: 40px 10px;
  background: rgb(22, 30, 39);
  color: rgb(109, 118, 133);
}
</style>