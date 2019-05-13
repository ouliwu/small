<template>
   <div class="sq-app-container">
     <div class="sq-app-header">
       <sq-header></sq-header>
     </div>
     <div class="sq-app-main">
       <router-view></router-view>
      </div>
     <div class="sq-app-topbar">
       <router-view name="footer"></router-view>
     </div>
   </div>
</template>

<script>
import SqHeader from '@/components/SqHeader'
export default {
  components: {
    SqHeader
  }
  // created () {
  //   this.$http.getHomeData()
  //     .then(resp => {
  //       // console.log(resp)
  //     })
  //     .catch(error => {
  //       // console.log(error)
  //     })
  // }

}
</script>

<style lang="scss">

html, body, div, span, applet, object
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a,  big, cite, code, em, img, ins, kbd, q, s, samp,
small, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  font-size: 12px;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body {
  height:100%;
  overflow: hidden;
}
.sq-app {
  &-container {
    display: flex;
    flex-direction: column;
    height:100%
  }
  &-main {
    flex: 1;
    overflow-x: hidden;
  }
}
@font-face {
  font-family: 'iconfont';  /* project id 1169751 */
  src: url('//at.alicdn.com/t/font_1169751_welutbj0ku9.eot');
  src: url('//at.alicdn.com/t/font_1169751_welutbj0ku9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1169751_welutbj0ku9.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1169751_welutbj0ku9.woff') format('woff'),
  url('//at.alicdn.com/t/font_1169751_welutbj0ku9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1169751_welutbj0ku9.svg#iconfont') format('svg');
}
</style>
