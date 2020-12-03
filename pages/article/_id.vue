<template>
  <div>
    <div
      :style="
        $route.query.tp === '1' ? { backgroundColor: 'rgb(22, 30, 39)' } : {}
      "
    >
      <div class="header-style" :class="{ container: $route.query.tp === '1' }">
        <a-row style="margin-bottom: 10px" v-show="$route.query.tp === '1'">
          <a-col>
            <div>
              <h1 class="head-title">{{ data.title }}</h1>
              <p class="head-p">
                {{ data.author.name }} &nbsp;{{ data.createTime }}&nbsp;
                {{ data.archive }}&nbsp;{{ data.view }} &nbsp;{{ data.like }}
              </p>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col
            :span="24"
            :class="
              $route.query.tp === '1'
                ? { 'media-box2': true }
                : { 'media-box1': true }
            "
            style="position: relative"
          >
            <div
              class="media-content"
              :style="`background-image: url('${data.cover}');`"
            ></div>
          </a-col>
        </a-row>
        <a-row v-show="$route.query.tp === '0'">
          <a-col :span="24">
            <h1 style="font-size: 1.875rem; line-height: 1.5">
              {{ data.title }}
            </h1>
            <a-row>
              <a-col :xs="4" :lg="2">
                <a-avatar :src="data.author.avatar" icon="user" size="large" />
              </a-col>
              <a-col :xs="20" :lg="19">
                <div>
                  {{ data.author.name }}
                </div>
                <div>
                  {{ data.createTime }} &nbsp; 发布在 {{ data.archive }}
                </div>
              </a-col>
              <a-col
                :xs="{ span: 0 }"
                :lg="{ span: 3 }"
                style="line-height: 42px"
              >
                <span><a-icon type="eye" /> {{ data.view }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span> <a-icon type="heart" />&nbsp;{{ data.like }}</span>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <a-divider v-show="$route.query.tp === '0'"></a-divider>
      </div>
    </div>

    <div class="container" :style="$route.query.tp === '1'?{paddingTop:'40px'}:{}">
      <a-row>
        <a-col :span="24">
          <div v-html="data.content"></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  // 校验id为数值才可访问此组件
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  layout(context) {
    if (context.query.tp === "1") {
      return "default";
    } else {
      return "light";
    }
  },
  head() {
    return {
      title: this.data.title, // 浏览器中的标题
    };
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
  updated() {},
  methods: {},
  async asyncData({ params, app }) {
    // 1. 查询文章详情
    const { data } = await app.$detailsArticle(6);

    // 2. 更新文章浏览数: 将本此查询文章的id保存到cookie,
    // 如果说cookie存在此文章id，则不更新浏览器，如果不存在则更新，
    // 当浏览器关闭自动将此文章cookie的值把它删除，再它下次打开浏览器的时候，再去访问文章，文章浏览数就+1
    // a. 判断当前cookie是否存在此文章id
    const isView = app.$cookies.get(`aritcle-view-${params.id}`);
    if (!isView) {
      // 没有值 ，可以更新浏览数
      const { code } = await app.$updateArticleViewCount(params.id);
      if (code === 200) {
        // 将此文章浏览数+1
        data.viewCount++;
        // 保存cookie中, 关闭浏览器后会被删除
        app.$cookies.set(`aritcle-view-${params.id}`, true);
      }
    }

    //    console.log('文章详情', data)
    // 通过文章id查询所有评论列表信息
    // const {data: commentList} = await app.$getCommentListByArticleId(params.id)
    // return { data, commentList }
    data.cover = "https://static.is26.com/blog/2020/07/tibet/t-135.JPG";
    return { data };
  },
};
</script>

<style scoped>
.anticon {
  transform: translateY(-0.2rem);
}
.head-p {
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}
.head-title {
  color: #fff;
  font-size: 1.875rem;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
}
@media screen and (max-width: 812px) {
  .media-box1 {
    height: 160px !important;
  }
  .media-box2 {
    height: 240px !important;
  }
  .header-style {
    padding: 20px 10px !important;
  }
}
.header-style {
  padding: 40px 0 20px 0;
}
.media-box1 {
  height: 317px;
}
.media-box2 {
  height: 552px;
}
.media-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: rgba(120, 120, 120, 0.1);
  margin-bottom: 1.5rem;
}
</style>