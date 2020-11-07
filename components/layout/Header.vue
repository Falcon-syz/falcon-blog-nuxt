<template>
  <div style="background: rgb(52, 58, 64)">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" style="margin-right: 80px" href="#">Falcon</a>
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
              <a class="nav-link" href="#">问答</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">标签</a>
            </li>
          </ul>

          <a-button ghost style="margin-right: 20px"> 登录 </a-button>
          <a-dropdown placement="bottomCenter">
            <a-avatar icon="user" size="large" />
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
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
</style>