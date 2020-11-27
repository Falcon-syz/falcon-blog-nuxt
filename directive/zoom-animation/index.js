import Vue from 'vue'
const focus = Vue.directive('zoom', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el) {
        // 聚焦元素
        console.log(el, 'el');
    }
})
export default focus