import Vue from 'vue'
import Router from 'vue-router'
import Seller from '@/components/seller/seller'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/goods',
        name: 'Goods',
        component: Goods
    }, {
        path: '/seller',
        name: 'Seller',
        compoent: Seller
    }, {
        path: '/ratings',
        name: 'Ratings',
        compoent: Ratings
    }]
})
