<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class='tab border-down-1px border-up-1px'>
      <div class="tab-item">
        <router-link to='/goods'>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'

const ERR_OK = 0

export default {
  name: 'app',
  data () {
    return {
        seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((res) => {
      res = res.body
      if (res.errno === ERR_OK) {
        this.seller = res.data
        console.log(this.seller)
      }
    })
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang='stylus'>
@import './common/stylus/mixin.styl';

  .tab
    display: flex
    width: 100%
    line-height: 40px
    height: 40px
    border-down-1px(rgba(7, 17, 27, 0.1))
    border-up-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 88, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
