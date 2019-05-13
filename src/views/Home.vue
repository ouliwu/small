<template>
  <div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div
        class="swiper-slide"
        v-for="item in swiperData"
        :key='item.id'
        >
          <img :src="item.imageUrl" :alt="item.title">
        </div>       
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperData: []
    }
  },
  created () {
    this.$http.getHomeData()
     .then(resp => {
        this.swiperData = resp.banners
        this.$nextTick(() => {
          this.initSwiper()
        })
      })
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 0;
    padding-top: percentage(400 / 1080);
    .swiper-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        img {
          max-width: 100%;
        }
    }
}
 
</style>
