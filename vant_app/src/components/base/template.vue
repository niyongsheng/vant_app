<template>
  <div>
    <van-nav-bar title="Home">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <div class="page">
    </div>
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant'
export default {
  name: 'template',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  props: {},
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
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>

</style>
