<template>
  <div style="background-color: rgb(22, 30, 39)">
    <HomeBanner></HomeBanner>
    <HomeMain></HomeMain>
  </div>
</template>

<script>
import HomeBanner from "@/components/home/home-banner";
import HomeMain from "@/components/home/home-main";

export default {
  components: { HomeBanner, HomeMain },
  mounted() {},
};
</script>

<style scoped>
</style>
