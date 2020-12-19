/* 根据窗口宽度自动计算html基准字体大小，用于移动端弹性布局 */
(function () {
  let docEl = document.documentElement
  let docBody = document.body
  let baseFontSize = 100 // 为了方便，这样rem=px/100
  let pageMaxWidth = 750
  let rootHtml = document.getElementsByTagName('html')[0]
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth = docEl.clientWidth || docBody.clientWidht
    // 最大宽度显示为750的宽度
    if (clientWidth > pageMaxWidth) {
      clientWidth = pageMaxWidth
    }
    if (!clientWidth) return
    rootHtml.style.fontSize = baseFontSize * (clientWidth / pageMaxWidth) + 'px'
  }
  if (!window.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)

  recalc()
})()

// 禁止双击放大
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
}, false)
var lastTouchEnd = 0
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now()
  if (now - lastTouchEnd <= 300) {
    event.preventDefault()
  }
  lastTouchEnd = now
}, false)
