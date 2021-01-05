<template>
  <div style="background-color: rgb(22, 30, 39)">
    <HomeBanner></HomeBanner>
    <HomeMain :archiveList="archiveList.archiveVO" :articleList="articleList"></HomeMain>
  </div>
</template>

<script>
import HomeBanner from "@/components/home/home-banner";
import HomeMain from "@/components/home/home-main";

export default {
  components: { HomeBanner, HomeMain },
  mounted() {},
  async asyncData({ app, query }) {
    const { data: archiveList } = await app.$getArchiveList();
    const { data: articleList } = await app.$pageArticle({
      page: 1,
      pageSize: 16,
    });
    return { archiveList, articleList };
  },
};
</script>

<style scoped>
</style>
