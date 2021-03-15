<template>
    <div class="box">
      <img
        src="@/assets/img/userImg/v2-f3731d0b549a0ccfe84b3419b64eaa67_720w.jpg"
        class="about-avatar"
      />
      <a-divider />
      <p v-html="info">前端程序员</p>
    </div>
</template>

<script>
export default {
  layout(context) {
    return "light";
  },
  head() {
    return {
      title: "关于-孙亚铮的个人博客",
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
  mounted() {},
  updated() {},
  methods: {},
  async asyncData({ app }) {
    const { avtar, info } = await app.$about();
    return { info, avtar };
  },
};
</script>

<style scoped>
.about-avatar {
  width: 120px;
  height: 120px;
  border-radius: 90px;
  margin-top: 40px;
}
.box {
  text-align: center;
  width: 100%;
  min-height: 800px;
  background: #fff;
  margin: 30px 0 60px 0;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>