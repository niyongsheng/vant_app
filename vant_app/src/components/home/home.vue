<template>
  <div>
    <van-nav-bar title="Home" right-text="按钮"/>

    <div class="page_footer">

      <van-swipe class="banner" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="banner_image" v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>

      <van-notice-bar class="noti"
                      scrollable
                      left-icon="volume-o"
                      text="You build it, You run it. —— Werner Vogels"
      />

      <van-tabs v-model="active">
        <van-tab title="标签 1">
          <van-empty image="network" description="内容 1"/>
        </van-tab>
        <van-tab title="标签 2">
          <van-empty image="error" description="内容 2"/>
        </van-tab>
        <van-tab title="标签 3">
          <van-empty image="search" description="内容 3"/>
        </van-tab>
        <van-tab title="标签 4">
          <van-empty description="内容 4"/>
        </van-tab>
      </van-tabs>

      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>

      <div class="df_ab">
        <van-button class="btn_custom" type="danger" @click="showNotify('warning')">危险按钮</van-button>
        <van-button class="btn_custom" type="warning" @click="showNotify('danger')">警告按钮</van-button>
        <van-button class="btn_custom" type="primary" @click="showNotify('success')">主要按钮</van-button>
      </div>

      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 7px', fontSize: '12px' }"
      >
        底线
      </van-divider>

    </div>

  </div>
</template>

<script>
import {Button, NavBar, Swipe, SwipeItem, NoticeBar, Tab, Tabs, Empty, Divider, Steps, Step, Notify} from 'vant'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]: NoticeBar,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Empty.name]: Empty,
    [Divider.name]: Divider,
    [Steps.name]: Steps,
    [Step.name]: Step,
    [NavBar.name]: NavBar,
    [Notify.Component.name]: Notify.Component
  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      active: 0,
      query: {}
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  },
  watch: {},
  created () {
  },
  mounted () {
    this.query = this.$route.query
  },
  methods: {
    showNotify (type) {
      Notify({ type: type, message: '通知内容' })
    }
  }
}
</script>

<style scoped>
.banner {
  height: 4.5rem;
  width: 100%;
}

.banner_image {
  margin-top: 0.2rem;
  align-items: center;
  height: 4.3rem;
  width: 90%;
  border-radius: 10px;
}

.noti {
  margin: 0.2rem;
}

.btn_custom {
  margin: 0.1rem;
  border-radius: 0.1rem;
}
</style>
