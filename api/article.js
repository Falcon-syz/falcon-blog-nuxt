export default ({ $axios }, inject) => {

    // 查询归档列表接口
    inject('getArchiveList', () => $axios.$get('/article/api/archive/list'))

    // 分页文章列表接口
    inject('pageArticle', params => $axios.$post('/article/api/article/page', params))

    // 文章详情接口
    inject('detailsArticle', id => $axios.$get(`/article/api/article/details/${id}`))

    // 浏览文章接口
    inject('updateArticleViewCount', id => $axios.$get(`/article/api/article/update/view/${id}`))

    // 关于接口
    inject('about', () => $axios.$get('/about'))

    // 获取留言接口
    inject('massage', params => $axios.$post('/massage',params))
}