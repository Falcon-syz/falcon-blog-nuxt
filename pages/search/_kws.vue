<template>
  <div>
    <div class="container" style="padding: 40px 0">
      <a-row>
        <h4>搜索：<span class="barBefore">{{$route.params.kws}}</span></h4>
      </a-row>
      <a-row :gutter="{ xs: 8, lg: 20 }" style="margin-bottom: 10px">
        <a-col
          :xs="{ span: 12 }"
          :lg="{ span: 6 }"
          v-for="(item, index) in articleList.records"
          :key="index"
          style="margin-bottom: 20px"
        >
          <div class="card">
            <nuxt-link
              :to="{
                name: 'article-id',
                params: { id: item.id },
                query: { tp: item.type },
              }"
              target="_blank"
            >
              <div class="pic-card-icon" v-show="item.type === 1">
                <a-icon type="picture" theme="filled" />
              </div>
              <img
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2330346801,1817524984&fm=26&gp=0.jpg"
                class="card-img-top coverHover"
                alt="..."
              />
            </nuxt-link>
            <div class="card-body">
              <span>{{ item.archive }}</span>
              <h6 class="card-title">{{ item.title }}</h6>
              <p class="card-text">
                {{ item.createTime }}
              </p>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-pagination :total="500" :item-render="itemRender" />
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "light";
  },
  head() {
    return {
      title: "您正在搜索"+this.$route.params.kws + " - 孙亚铮的个人博客", // 浏览器中的标题
    };
  },
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  updated() {},
  methods: {
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a>Previous</a>;
      } else if (type === "next") {
        return <a>Next</a>;
      }
      return originalElement;
    },
  },
  async asyncData({ app, query }) {
    const { data: articleList } = await app.$pageArticle({
      page: 1,
      pageSize: 16,
    });

    return { articleList };
  },
};
</script>

<style scoped lang="less">
@media screen and(max-width: 812px) {
  .pic-card-icon {
    top: 60px !important;
  }
}
.barBefore{
  position: relative;
  &::before{
    content: '';
    width:3px;
    height: 60%;
    border-radius: 10px;
    background: rgb(240, 70, 63);
    position:absolute;
    left:-7px;
    top:9px;
  }
}
.pic-card-icon {
  background: rgba(77, 78, 80, 0.692);
  width: 50px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 42px;
  border-radius: 25px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
.coverHover {
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    -webkit-filter: brightness(85%); /* Chrome, Safari, Opera */
    filter: brightness(85%);
  }
}
</style>