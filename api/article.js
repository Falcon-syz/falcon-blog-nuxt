export default ({ $axios }, inject) => {

    // 查询归档列表接口
    inject('getArchiveList', () => $axios.$get('/article/api/archive/list'))

    // 查询归档列表接口
    inject('pageArticle', params => $axios.$post('/article/api/article/page',params))
}