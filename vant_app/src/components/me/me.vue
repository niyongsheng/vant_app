<template>
  <div>
    <van-nav-bar class="navigation" title="Home">
      <template #right>
        <van-icon name="search" size="18"/>
      </template>
    </van-nav-bar>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item">
        <van-rate v-model="value"/>
      </van-cell>
    </van-list>
    <van-skeleton title :row="3" :loading="loading"/>
    <van-skeleton title :row="3" :loading="loading"/>
    <van-skeleton title :row="3" :loading="loading"/>
    <van-skeleton title :row="3" :loading="loading"/>
    <van-skeleton title :row="3" :loading="loading">
    </van-skeleton>
  </div>
</template>

<script>
import {get} from '@/assets/js/request'
import {Button, NavBar, Icon, List, Cell, Rate, Skeleton} from 'vant'

export default {
  name: 'me',
  components: {
    [Skeleton.name]: Skeleton,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [Rate.name]: Rate,
    [Icon.name]: Icon
  },
  props: {},
  data () {
    return {
      list: [],
      skeleton: true,
      loading: false,
      finished: false,
      value: Math.random() * 5
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    let params = {
      a: 'getPortalList',
      catid: 20,
      page: 1
    }
    get('/music', params).then((data) => {
      console.log(data)
    })
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        if (this.list.length >= 100) {
          // 数据全部加载完成
          this.finished = true
          this.skeleton = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="css" scoped>
.navigation {
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
}
</style>
