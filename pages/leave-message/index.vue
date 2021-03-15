<template>
  <div class="container">
    <div class="box">
      <a-skeleton avatar :paragraph="{ rows: 4 }" active />
      开发中
    </div>
  </div>
</template>

<script>
export default {
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
.box {
  width: 100%;
  min-height: 800px;
  background: #fff;
  margin: 30px 0 60px 0;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>