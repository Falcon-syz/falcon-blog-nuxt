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
                href="https://github.com/Falcon-syz"
                class="link-style"
                target="_blank"
              >
                <a-icon type="github"
              /></a>
              <a href="javascript:;" @click="copy('QQ','526203396')" class="link-style"
                ><a-icon type="qq" /></a>
              <a href="javascript:;" @click="copy('微信','mockingbird_9527')" class="link-style"
                ><a-icon type="wechat"
              /></a>
               <a href="javascript:;" @click="copy('邮箱','sunyzh9527@sina.com')" class="link-style"
                ><a-icon theme="filled" type="mail" /></a>
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
                  href="http://blog.sunyazheng.com/"
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
          name: "GitHub",
          url: "https://github.com/Falcon-syz",
        },
        {
          name: "新浪微博",
          url: "https://weibo.com/u/1868311632",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  methods: {
    copy(name,val) {
      this.$copyText(val).then(
        () => {
          // 成功回调
          this.$notification.open({
            message: `复制${name}成功`,
            description: "Thanks ;)",
            icon: <a-icon type="smile" style="color: #108ee9" />,
          });
        },
        () => {
          // 失败回调
          this.$notification.error({
            message: `复制${name}失败啦`,
            description: "不妨再试试？",
          });
        }
      );
    },
  },
};
</script>

<style scoped lang="less">
/deep/.ant-notification{
  z-index:1031
}
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