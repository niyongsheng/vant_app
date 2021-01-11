<template>
  <div>
    <van-nav-bar title="红包雨" >
      <template #left>
        <van-icon
          @click="backSpace"
          size="0.4rem"
          name="arrow-left"
          color="#333"
        />
      </template>
    </van-nav-bar>

    <div class="about">
      <rain ref="rain" :time="30"/>
    </div>
    <div class="page">

    </div>

  </div>
</template>

<script>
import {Icon, NavBar} from 'vant'
import rain from '@/components/me/rain'

export default {
  name: 'redPackList',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    rain
  },
  props: [],
  data () {
    return {
      query: {},
      sourceArray: [{}, {}]
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    this.query = this.$route.query
    this.$refs.rain.start()
  },
  beforeDestroy () {
    this.$refs.rain.clear()
  },
  methods: {}
}
</script>

<style scoped>

.title {
  padding: 0 0.4rem;
  font-size: 0.4rem;
  line-height: 0.4rem;
}

.page {
  padding: 0.5rem 0.5rem 0 0.5rem;
}

</style>
