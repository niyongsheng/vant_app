<template>
  <div id="app">
    <router-view></router-view>
    <footer-view v-if="$route.meta.footShow" id="app_footer"/>
  </div>
</template>

<script>
import FooterView from './components/base/footer'

export default {
  name: 'App',
  components: {
    'footer-view': FooterView
  },
  methods: {
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  },
  mounted () {
    window.addEventListener('unload', this.saveState)
  },
  computed: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background: #F6F7F9;
}
</style>
