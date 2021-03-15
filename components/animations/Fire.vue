<template>
  <div class="cf-container">
    <div class="cf-flame-container" id="fireNodes1">
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
    </div>
    <div class="cf-flame-container" id="fireNodes2">
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
    </div>
    <div class="cf-flame-container" id="base-fire">
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
      <div class="cf-flame"></div>
    </div>
    <div class="cf-log-container">
      <div class="cf-log"></div>
      <div class="cf-log"></div>
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
  mounted() {
    let fireNodes1 = document.querySelectorAll("#fireNodes1 .cf-flame");
    let fireNodes2 = document.querySelectorAll("#fireNodes2 .cf-flame");
    let fireNodes3 = document.querySelectorAll("#fireNodes1 .cf-flame");
    let baseFire = document.querySelectorAll("#base-fire .cf-flame");

    function animateBaseFire() {
      anime({
        targets: baseFire,
        delay: anime.stagger(300),
        translateY: function () {
          return anime.random(0, -10);
        },
        keyframes: [
          { scale: 0.8 },
          { scale: 0.825 },
          { scale: 0.9 },
          { scale: 0.925 },
          { scale: 1 },
        ],
        duration: 300,
        easing: "easeInOutSine",
        loop: true,
      });
    }

    function animateFlame1() {
      anime({
        targets: fireNodes1,
        delay: anime.stagger(100),
        translateY: function () {
          return anime.random(0, 300);
        },
        rotate: 30,
        opacity: function () {
          return anime.random(0.5, 1);
        },
        translateX: function () {
          return anime.random(0, -60);
        },
        scale: 0,
        skew: function () {
          return anime.random(0, 10);
        },
        loop: true,
        easing: "easeInOutSine",
      });
    }

    function animateFlame2() {
      anime({
        targets: fireNodes2,
        delay: anime.stagger(400),
        translateX: function () {
          return anime.random(-30, 0);
        },
        translateY: function () {
          return anime.random(0, -260);
        },
        translateY: function () {
          return anime.random(-260, -160);
        },
        translateX: function () {
          return anime.random(0, -30);
        },
        scale: 0,
        rotate: function () {
          return anime.random(0, 60);
        },
        skew: function () {
          return anime.random(0, 30);
        },
        loop: true,
        easing: "easeInOutSine",
      });
    }

    function animateFlame3() {
      anime({
        targets: fireNodes3,
        delay: anime.stagger(500),
        translateY: function () {
          return anime.random(-300, -200);
        },
        opacity: function () {
          return anime.random(0, 1);
        },
        translateX: function () {
          return anime.random(-50, 50);
        },
        scale: 0,
        rotate: function () {
          return anime.random(0, -30);
        },
        skew: function () {
          return anime.random(0, 20);
        },
        loop: true,
        easing: "easeInOutSine",
      });
    }

    animateFlame1();
    animateFlame2();
    animateFlame3();
    animateBaseFire();
  },
  updated() {},
  methods: {},
};
</script>

<style scoped lang="less">
.cf-container {
  box-sizing: content-box;
  width: 300px;
  height: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .cf-flame-container {
    width: 100px;
    height: 100px;
    bottom: 0px;
    position: absolute;
  }

  .cf-log-container {
    width: 60%;
    height: 100px;
    position: absolute;
    bottom: 0px;
    left: 50px;
  }

  .cf-flame-container#base-fire {
    .cf-flame:nth-child(1) {
      background: #c63509;
      opacity: 0.95;
    }
    .cf-flame:nth-child(2) {
      background: #cd4015;
      width: 100px;
      height: 100px;
      opacity: 0.85;
      left: 75px;
    }
    .cf-flame:nth-child(3) {
      background: #d73e0f;
      width: 60px;
      height: 60px;
      opacity: 0.85;
      left: 130px;
    }
  }

  .cf-flame-container:nth-child(2) {
    width: 150px;
    height: 150px;
    bottom: 0px;
    position: absolute;

    .cf-flame {
      width: 75px;
      height: 75px;
      left: 75px;
    }
  }
}

.cf {
  &-log {
    background: #723830;
    width: 20px;
    height: 30px;
    transform-origin: center;
    position: absolute;
    bottom: 0px;
    border-radius: 0.5em;
    box-shadow: 0 3px 10px #372113;
    width: 100%;
    &:nth-child(1) {
      transform: rotate(15deg);
    }
    &:nth-child(2) {
      transform: rotate(-15deg);
    }
  }
  &-flame:nth-child(1) {
    background: #f5ed8f;
  }
  &-flame:nth-child(2) {
    background: #fde239;
  }
  &-flame:nth-child(3) {
    background: #ffdc01;
  }
  &-flame:nth-child(4) {
    background: #fdac01;
  }
  &-flame:nth-child(5) {
    background: #d73e0f;
  }
  &-flame:nth-child(6) {
    background: #cd4015;
  }
  &-flame:nth-child(7) {
    background: #c63509;
  }
  &-flame:last-child {
    background: #c63509;
  }
  &-flame {
    background: #cd4015;
    width: 100px;
    height: 100px;
    border-radius: 1em;
    position: absolute;
    bottom: 0px;
    left: 100px;
  }
}

#fireNodes2 .cf-flame {
  animation: flameColor 1.5s ease-out infinite;
}

@keyframes flameColor {
  0% {
    background: #c63509;
  }
  20% {
    background: #cd4015;
  }
  30% {
    background: #fdac01;
  }
  50% {
    background: #ffb401;
  }
  60% {
    background: #fdac01;
  }
  70% {
    background: #ffdc01;
  }
  80% {
    background: #fde239;
  }
  100% {
    background: #f5ed8f;
  }
}
</style>