<template>
  <div class="box">
    <a-row>
      <a-col :xs="{ span: 24 }" :lg="{ span: 12, offset: 6 }">
        <div style="padding-top: 60px">
          <Fire></Fire>
        </div>
        <div class="msgListContainer">
          <div
            class="msgListItem"
            v-for="(item, index) in msgList.records"
            :key="index"
          >
            <div class="itemHeader">
              <div class="itemAvatar">
                <a-avatar :src="item.auth.avatar" />
                <div>{{ item.auth.name }}</div>
              </div>
              <div class="itemTime">{{ item.createTime }}</div>
            </div>
            <div class="itemFooter">
              <p class="itemFooterContent">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <SubmitMsg style="margin-top: 120px"></SubmitMsg>
  </div>
</template>

<script>
import Fire from "@/components/animations/Fire";
import SubmitMsg from "@/components/leave-msg/SubmitMsg";
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js",
        },
      ],
      title: "留言板-孙亚铮的个人博客",
    };
  },
  components: {
    Fire,
    SubmitMsg,
  },
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
  async asyncData({ app }) {
    const { data: msgList } = await app.$massage({});
    return { msgList };
  },
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  min-height: 800px;
  background: rgb(22, 30, 39);
}
.msgListContainer {
  .msgListItem {
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.7);
      // box-shadow: 0 0 30px rgba(255, 221, 10, 0.562);
    }
    transition: all 0.5s;
    margin-bottom: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    // color: rgba(255, 255, 255, 0.788);
    color: rgba(255, 255, 255, 0.75);
    background: rgba(0, 0, 0, 0.15);
    padding: 10px 16px;
    .itemHeader {
      flex: 1;
      .itemAvatar {
        text-align: center;
        font-weight: bold;
      }
      .itemTime {
        text-align: center;
        font-size: 8px;
        line-height: 12px;
        font-weight: bold;
      }
    }
    .itemFooter {
      flex: 9;
      .itemFooterContent {
        word-break: break-all;
        padding: 0 10px;
      }
    }
  }
}
</style>