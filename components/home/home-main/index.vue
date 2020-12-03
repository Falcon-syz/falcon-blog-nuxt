<template>
  <div class="home-body">
    <div class="container">
      <div class="mid-scroll-box">
        <a-row :gutter="{ xs: 8, lg: 20 }" class="w-200">
          <a-col
            v-for="(item, index) in archiveList"
            :key="index"
            :span="4"
            class="archive-box"
          >
            <span class="archive-title">{{ item.title }}</span>
            <div class="hoverInnerContainer">
               <nuxt-link
              :to="{
                name: 'archive',
                query: { arc: item.id },
              }"
              target="_blank"
            >
              <img
                class="hoverZoom"
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655212573,3518083758&fm=26&gp=0.jpg"
                alt=""
              />
               </nuxt-link>
            </div>
          </a-col>
        </a-row>
      </div>
      <Bredcrumb></Bredcrumb>
      <a-row :gutter="{ xs: 8, lg: 20 }">
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
                <a-icon type="picture" theme="filled"/>
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
    </div>
  </div>
</template>

<script>
import Bredcrumb from "./components/breadcrumb";
export default {
  components: { Bredcrumb },
  props: {
    archiveList: {
      type: Array,
      default: () => [],
    },
    articleList: {
      type: Object,
      default: () => {},
    },
  },
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

<style scoped lang="less">
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
@media screen and(max-width: 812px) {
  .pic-card-icon {
    top: 60px !important;
  }
  .mid-scroll-box {
    width: 100%;
    overflow-x: scroll;
  }
  .w-200 {
    width: 160%;
  }
  .hoverInnerContainer {
    height: 3.5rem !important;
    line-height: 3.5rem;
    text-align: center;
    margin-bottom: 0 !important;
  }
  .home-body {
    padding-top: 15px !important;
  }
}
.archive-box {
  position: relative;
  .archive-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: #fff;
    pointer-events: none;
  }
}

.hoverInnerContainer {
  width: 100%;
  height: 8rem;
  overflow: hidden;
  position: relative;
  line-height: 8rem;
  text-align: center;
  border-radius: 0.4rem;
  margin-bottom: 20px;
  -webkit-filter: brightness(90%); /* Chrome, Safari, Opera */
  filter: brightness(90%);
  cursor: pointer;
}
.hoverZoom {
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.5s;
  transform: translate(-50%, -50%);
  &:hover {
    height: 105% !important;
    -webkit-filter: brightness(90%); /* Chrome, Safari, Opera */
    filter: brightness(90%);
  }
}
.home-body {
  padding-top: 2rem;
  background: #fff;
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