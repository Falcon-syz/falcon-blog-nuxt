<template>
  <div class="container">
    <div class="box">
     <img src="@/assets/img/userImg/v2-f3731d0b549a0ccfe84b3419b64eaa67_720w.jpg" class="about-avatar">
     <p>
       前端程序员
     </p>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "light";
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
};
</script>

<style scoped>
.about-avatar{
  width: 120px;
  height:120px;
  border-radius: 90px;
  margin-top: 40px;
}
.box {
  text-align: center;
  width: 100%;
  min-height: 800px;
}

</style>