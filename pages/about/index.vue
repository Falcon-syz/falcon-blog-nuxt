<template>
  <div class="container">
      <a-skeleton :paragraph="{ rows: 20 }" active v-show="isShowSkeleton" />
      开发中
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isShowSkeleton: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.isShowSkeleton = true;
    setTimeout(() => {
      this.isShowSkeleton = false;
    }, 500);
  },
  updated() {},
  methods: {},
};
</script>

<style scoped>
</style>