<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace :to="home.path">
        <span>{{ home.name }}</span>
        <template #icon="props">
          <img :src="props.active ? home.active : home.inactive"/>
        </template>
      </van-tabbar-item>

      <van-tabbar-item badge="3" replace :to="me.path">
        <span>{{ me.name }}</span>
        <template #icon="props">
          <img :src="props.active ? me.active : me.inactive"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {Icon, Tabbar, TabbarItem} from 'vant'

export default {
  name: 'FooterView',
  props: {
    // active: 0
  },
  components: {
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0,
      home: {
        name: 'Home',
        path: '/',
        active: require('@/assets/img/footer/home_selected.png'),
        inactive: require('@/assets/img/footer/home_normal.png')
      },
      me: {
        name: 'Me',
        path: '/me',
        active: require('@/assets/img/footer/me_selected.png'),
        inactive: require('@/assets/img/footer/me_normal.png')
      }
    }
  },
  methods: {},
  created () {
  },
  mounted () {
  },
  watch: {}
}
</script>

<style scoped>

</style>
