<template>
  <div class="r_container">
    <div
      class="r_cover"
      style="
        background-image: url(https://mockingbird-blog.oss-cn-beijing.aliyuncs.com/43ee35efc13faab90e301936f7ff8c1.jpg);
      "
    ></div>
    <div class="r_actions r_pointer">
      <div
        v-for="(item, index) in ActionList"
        :key="index"
        class="r_actions_icons"
      >
        <img :src="item" style="width: 90%" />
      </div>
    </div>
    <div class="r_name">Eminem</div>
    <div class="r_audio">
      <a-progress
        :percent="30"
        :showInfo="false"
        :strokeWidth="3"
        :strokeColor="'rgb(166, 180, 207)'"
      />
    </div>
    <div class="r_action_btn r_pointer">
      <img src="@/assets/img/icons/parse.png" style="width: 80%" />
    </div>
    <audio>
      <source
        src="https://mockingbird-blog.oss-cn-beijing.aliyuncs.com/EYcBAFvn-kOALGOIAD0XnsoHK_E428.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      ActionList: [
        require("../../assets/img/icons/收藏.png"),
        require("../../assets/img/icons/转发.png"),
        require("../../assets/img/icons/上一首.png"),
        require("../../assets/img/icons/下一首.png"),
      ],
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

<style scoped>
.r_pointer {
  cursor: pointer;
}
.r_action_btn {
  text-align: center;
  line-height: 35px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  right: 23px;
  bottom: 70px;
  border: 5px solid #fff;
}
.r_audio {
  width: 86%;
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.r_name {
  padding: 10px 0;
  font-family: "logoFont";
  font-size: 16px;
  font-weight: bold;
  transform: translateY(10px);
}
.r_actions_icons {
  padding: 12px 0;
}
.r_actions {
  position: absolute;
  top: 30px;
  right: 30px;
}
.r_cover {
  width: 100%;
  height: 250px;
  border-radius: 15px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  float: left;
  transform: translateX(-50px);
  box-shadow: 10px 10px 20px rgba(63, 63, 63, 0.329);
}
.r_container {
  margin: 0 auto;
  position: relative;
  padding: 30px;
  width: 100%;
  height: 390px;
  background: rgb(109, 118, 133);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(185, 198, 211, 0.534);
}
</style>