export default [{
    path: '/',
    component: 'Index'
}, {
    title: '访问异常',
    path: '/404',
    component: '404'
}, {
    path: '/logout',
    redirect: '/'
}, {
    title: '锚点页示例',
    path: '/anchorExample',
    component: 'anchorExample/views/Anchor'
}, {
    title: '列表页示例',
    path: '/listExample',
    component: 'listExample/views/List'
}, {
    title: '数据可视化示例',
    path: '/chartExample',
    component: 'chartExample/views/Chart'
}, {
    title: '地图可视化示例',
    path: '/mapExample',
    component: 'mapExample/views/Map'
}, {
    title: '空白页示例',
    path: '/emptyExample',
    component: 'emptyExample/views/Empty'
}, {
    title: '没有权限',
    path: '/forbidden',
    component: 'forbidden/views/Forbidden'
}];
