<template>
<div>
  <div class="sq-details">
     <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div
        class="swiper-slide"
        v-for="item in detail.photo"
        :key='item.id'
        >
          <img :src="item.url">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      </div>
    </div>
    <mt-badge size="small" color="#888"><span>{{detail.shop.title}}</span></mt-badge><span>{{detail.title}}</span>
</div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Details',
  data () {
    return {
      detail: {}
    }
  },
  created () {
    console.log(this.$route)
    const { id } = this.$route.params
    this.$http.getDetails(id)
      .then(resp => {
        console.log(resp)
        this.detail = resp.detail
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
    padding-top: 100%;
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
