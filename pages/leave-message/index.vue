<template>
  <div class="box">
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 12, offset: 6 }">
        <div style="padding-top: 60px">
          <a-row :gutter="10">
            <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
              <Record></Record>
            </a-col>
            <a-col :xs="{ span: 24 }" :lg="{ span: 12 }"> 5555 </a-col>
          </a-row>
        </div>
        <SubmitMsg></SubmitMsg>
        <div class="msgListContainer">
          <div
            class="msgListItem"
            v-for="(item, index) in msgList.records"
            :key="index"
          >
            <a-row>
              <a-col
                :xs="{ span: 3 }"
                :lg="{ span: 1 }"
                style="text-align: center"
              >
                <a-avatar :src="item.auth.avatar" />
              </a-col>
              <a-col :xs="{ span: 20, offset: 1 }" :lg="{ span: 22 }">
                <div>
                  <span style="color: rgb(133, 185, 230)"
                    >{{ item.auth.name }}：</span
                  ><span style="color: rgb(213, 213, 213)">{{
                    item.content
                  }}</span>
                </div>
                <div style="margin-top: 5px">
                  <span style="color: rgb(106, 106, 106)">{{
                    item.createTime
                  }}</span>
                </div>
              </a-col>
            </a-row>
          </div>
          <div style="margin: 40px 0">
            <a-pagination :default-current="1" :total="100" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SubmitMsg from "@/components/leave-msg/SubmitMsg";
import Record from "@/components/record/record";
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
    SubmitMsg,
    Record,
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
/deep/.ant-pagination-item-link {
  background-color: rgba(0, 0, 0, 0.15);
  border-color: #86868679;
}
/deep/.ant-pagination-item-ellipsis {
  color: #86868679 !important;
}
/deep/.ant-pagination-item {
  background-color: rgba(0, 0, 0, 0.15);
  border: 1px solid #86868679;
  a {
    color: rgb(139, 139, 139) !important;
    :hover {
      color: #fff !important;
    }
  }
  :hover {
    background-color: rgb(133, 9, 9);
    border-radius: 2px;
    border:none;
  }
}
/deep/.ant-pagination-item-active {
  background-color: rgb(133, 9, 9);
  border: none;
  a {
    color: #fff !important;
  }
}
/deep/.ant-pagination-prev {
  a {
    color: #86868679 !important;
  }
}
/deep/.ant-pagination-next {
  a {
    color: #86868679 !important;
  }
}
.box {
  width: 100%;
  min-height: 800px;
  background: rgb(22, 30, 39);
}
.msgListContainer {
  .msgListItem {
    padding: 20px 0;
    border-bottom: 1px solid rgba(106, 106, 106, 0.425);
  }
}
</style>