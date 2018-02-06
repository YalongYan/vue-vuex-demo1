import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        //请求的时候再加载相关的js
        component: r => require.ensure([], () => r(require('../components/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../components/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../components/score')), 'score')
    }]
}]