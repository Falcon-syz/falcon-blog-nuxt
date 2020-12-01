<template>
  <div style="height:1500px">5555555</div>
</template>

<script>
export default {
  components: {},
  // 校验id为数值才可访问此组件
   validate({params}) {
       return /^\d+$/.test(params.id)
   },
   layout(context) {
    console.log("🚀 ~ file: _id.vue ~ line 13 ~ layout ~ context", context)
    return 'light'
  },
   head() {
       return {
          //  title: this.data.title // 浏览器中的标题
           title: '文章详情' // 浏览器中的标题
       }
   },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  methods: {},
  //  async asyncData({params, app}) {
  //      // 1. 查询文章详情
  //       const {data} = await app.$getArticleById(params.id)

  //      // 2. 更新文章浏览数: 将本此查询文章的id保存到cookie, 
  //      // 如果说cookie存在此文章id，则不更新浏览器，如果不存在则更新，
  //      // 当浏览器关闭自动将此文章cookie的值把它删除，再它下次打开浏览器的时候，再去访问文章，文章浏览数就+1
  //      // a. 判断当前cookie是否存在此文章id
  //      const isView = app.$cookies.get(`aritcle-view-${params.id}`)
  //      if(!isView) {
  //          // 没有值 ，可以更新浏览数
  //          const {code} = await app.$updateArticleViewCount(params.id)
  //          if(code === 20000) {
  //              // 将此文章浏览数+1
  //              data.viewCount++
  //              // 保存cookie中, 关闭浏览器后会被删除
  //              app.$cookies.set(`aritcle-view-${params.id}`, true)
  //          }
  //      }

  //   //    console.log('文章详情', data)
  //     // 通过文章id查询所有评论列表信息
  //     const {data: commentList} = await app.$getCommentListByArticleId(params.id)
  //     return { data, commentList }
  //  }
};
</script>

<style scoped>
</style>