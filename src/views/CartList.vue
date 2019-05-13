<template>
  <div>
    <SqProducteItem
    v-for="item in producteItemList"
    :key="item.id"
    :id="item.id"
    :price="item.price"
    :img="item.image"
    :title="item.title"
    />
    <span v-if="isEnd" class="se-loadmore-btn no-more">没有更多了</span>
    <span v-else class="se-loadmore-btn" @click="getData">加载更多</span>
  </div>
</template>

<script>
import SqProducteItem from '@/components/SqProducteItem'
export default {
  components: {
    SqProducteItem
  },
  data () {
    return {
      producteItemList: [],
      isEnd: false,
      start: 0
    }
  },
  methods: {
    getData () {
      const { cateID } = this.$route.params
      this.$http.getProductList(cateID, this.start)
        .then(resp => {
          console.log(resp)
          this.producteItemList = this.producteItemList.concat(resp.items.list)
          this.start = resp.items.nextIndex
          this.isEnd = resp.items.isEnd
        })
    }
  },
  // created () {
  //   this.getData()
  // },
  // watch:{
  //   $route() {
  //     this.getData()
  //   }
  // }
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getData()
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.se-loadmore-btn {
  color: #fff;
  background: #091;
  margin: 8px;
  padding: 5px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: block;
  &.no-more {
    background: #ddd;
  }
}
</style>
