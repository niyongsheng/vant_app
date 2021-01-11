<template>
  <div>
    <div class="page_footer_header">
      <van-nav-bar class="navigation" title="Me">
        <template #right>
          <van-icon name="search" size="18"/>
        </template>
      </van-nav-bar>

      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg"/>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg"/>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg"/>
        </van-grid-item>
      </van-grid>

      <van-grid :column-num="2" class="main_item">
        <van-grid-item @click="toRedPack" icon="gem-o" text="红包雨" dot/>
        <van-grid-item @click="toLuckywheel" icon="gift-o" text="大转盘" badge="99+"/>
      </van-grid>

      <div v-show="isShowCircle">
        <van-circle v-model="currentRate" color="#FF5048" :rate="60" :stroke-width="50" :clockwise="false"
                    :text="text"/>
        <van-circle v-model="currentRate" color="#FFCA39" :rate="30" :stroke-width="50" :clockwise="false"
                    :text="text"/>
        <van-circle v-model="currentRate" color="#49BA26" :rate="80" :stroke-width="50" :clockwise="false"
                    :text="text"/>
      </div>

      <div class="ta">
        <van-cell-group title="Test">
          <van-cell title="列表" value="内容" @click="toLoadMore"/>
          <van-cell title="进度环" value="内容" label="描述信息" @click="isShowCircle = true"/>
        </van-cell-group>

        <van-cell title="单元格" icon="location-o" is-link/>
        <van-cell title="单元格" icon="location-o" is-link/>
        <van-cell title="单元格" icon="location-o" is-link/>
        <van-cell title="单元格" icon="location-o" is-link/>

        <van-cell-group title="插槽">
          <van-cell value="内容" is-link>
            <template #title>
              <span class="custom-title">单元格</span>
              <van-tag type="danger">标签</van-tag>
            </template>
          </van-cell>

          <van-cell title="单元格" icon="shop-o">
            <template #right-icon>
              <van-icon name="search" class="search-icon"/>
            </template>
          </van-cell>
        </van-cell-group>
      </div>

    </div>
  </div>
</template>

<script>
import {NavBar, Icon, Grid, GridItem, Image, Circle, Cell, CellGroup, Tag} from 'vant'

export default {
  name: 'me',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Circle.name]: Circle,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tag.name]: Tag
  },
  props: {},
  data () {
    return {
      list: [],
      skeleton: true,
      isShowCircle: false,
      finished: false,
      currentRate: 0
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  },
  watch: {},
  created () {},
  mounted () {
  },
  methods: {
    toRedPack () {
      this.$router.push({
        path: '/redPackList'
      })
    },
    toLuckywheel () {
      this.$router.push({
        path: '/luckywheel'
      })
    },
    toLoadMore () {
      this.$router.push({
        path: '/loadMore'
      })
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

.main_item {
  margin: 0.2rem 0;
}

.ta {
  text-align: left;
}

</style>
