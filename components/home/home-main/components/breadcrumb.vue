<template>
  <div class="breadcrumb">
    <a-radio-group v-model="value">
      <a-radio value="a"> 最新</a-radio>/ <a-radio value="b"> 热门 </a-radio>/
      <a-radio value="c"> 视频 </a-radio>/
      <a-radio value="d"> 生活 </a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value: "a",
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
.breadcrumb {
  text-align: center;
  margin-top: 10px;
  font-size: 1rem;
}
/deep/.ant-radio-wrapper {
  transition: all 0.5s;
}
/deep/.ant-radio-wrapper-checked {
  font-size: 1.1rem;
  font-weight: 600;
}
/deep/.ant-radio {
  display: none;
}
</style>