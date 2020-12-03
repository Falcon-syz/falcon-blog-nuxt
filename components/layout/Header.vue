<template>
  <div>
    <nav
      ref="navHead"
      class="navbar navbar-expand-lg fixed-top navbar-dark my-navbar"
      :class="{ scrollStyle: isScroll }"
    >
      <div class="container">
        <a class="navbar-brand" style="margin-right: 80px" href="/"
          ><span style="transform: translateY(-3px); display: block"
            >FALCON</span
          ></a
        >

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active mx-3">
              <a class="nav-link" href="#"
                >博客 <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">留言</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">关于</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <div class="nav-right">
            <a-tooltip placement="bottom">
              <template slot="title"> 搜索 </template>
              <a-icon type="search" style="margin-right: 1rem" />
            </a-tooltip>
            <a-tooltip placement="bottom">
              <template slot="title"> 最近搜索记录 </template>
              <a-icon type="history" />
            </a-tooltip>
          </div>
        </div>
      </div>
    </nav>
    <div class="top-bac"></div>
    <SearchModal></SearchModal>
  </div>
</template>

<script>
import SearchModal from '../search-modal'
export default {
  head: {
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css",
      },
    ],
  },
  components: {
    SearchModal
  },
  props: {},
  data() {
    return {
      isScroll: false,
      navHeight: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.navHeight = this.$refs["navHead"].offsetHeight;
    window.addEventListener("scroll", this.handleScroll);
  },
  updated() {},
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //获取滚动时的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // let oneHeight = this.$refs["navHead"].$el.offsetHeight;
      let oneHeight = this.navHeight;

      if (scrollTop > oneHeight) {
        //这是滑动到scrollTwo的距离要做的操作
        this.isScroll = true;
      }
      if (scrollTop <= oneHeight) {
        //这是滑动到scrollTwo的距离要做的操作
        this.isScroll = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.top-bac {
  position: absolute;
  width: 100%;
  height: 91px;
  top: 0;
  left: 0;
  background: rgb(22, 30, 39);
}
.navbar-brand {
  display: block;
  padding: 5px 20px;
  border-radius: 0.3rem;
  background: rgb(133, 9, 9);
  font-family: "logoFont";
  font-size: 1.5rem;
  letter-spacing: 5px;
}
@media screen and(max-width: 812px) {
  // .top-bac{
  //   display: none;
  // }
  .navbar-brand {
    font-size: 1.2rem !important;
  }
  .my-navbar {
    background-color: rgba(2, 10, 18, 0.8) !important;
    padding: 20px 12px;
  }
}
.nav-right {
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
}
.my-navbar {
  transition: all 0.5s;
  background-color: transparent;
  padding: 20px 12px 25px 12px;
  font-size: 0.95rem;
}
.scrollStyle {
  background: rgba(2, 10, 18, 0.8) !important;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>