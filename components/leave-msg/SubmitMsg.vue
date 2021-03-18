<template>
  <div class="submitContainer">
    <div class="sTitle">留言<span class="sDesc">（已有825条留言）</span></div>
    <div class="textAreaBox">
      <a-icon type="edit" style="transform:translateY(-2px);margin-right:5px"/>写点东西吧...
      <a-icon type="smile" style="float:right;cursor:pointer"/>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    
    }
  },
  computed: {},
  watch: {},
  created(){},
  mounted(){},
  updated(){},
  methods: {}
}
</script>

<style scoped>
.textAreaBox{
  border-radius: 5px;
  background: rgb(57, 57, 57);
  color: rgb(106, 106, 106);
  width: 100%;
  height:80px;
  position: relative;
  padding: 15px;
  margin: 20px 0;
}

.sTitle{
  font-size: 14px;
  font-weight: bold;
  color: rgb(188, 188, 188);
  margin: 20px 0;
}
.sDesc{
  font-size: 12px;
  color: rgb(106, 106, 106);
}
</style>