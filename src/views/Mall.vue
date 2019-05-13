<template>
  <div class="se-mall">
      <div class="se-mall-siderbar">
          <ul>
              <router-link
              tag="li"
              class="se-mall-siderbar__item"
              v-for="item in cateList"
              :key="item.id"
              :to="`/mall/${item.id}`">{{item.name}}</router-link>
          </ul>
      </div>
      <div class="se-mall-main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cateList: []
    }
  },
  created () {
    this.$http.getCartNav()
      .then(resp => {
        const { list } = resp
        list.shift()
        this.cateList = list
      })
  }
}
</script>

<style lang='scss' scoped>
.se-mall {
  display: flex;
  height: 100%;
  overflow: hidden;
  &-siderbar {
      width: 80px;
      height:100%;
      background: #f2f2f2;
      padding: 10px 0;
      overflow-x: hidden;
      box-sizing: border-box;
      &__item {
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
           border-left: 2px solid #f2f2f2;
          &.se-mall,
          &.router-link-exact-active {
            background: #fff;
            color: #26a2ff;
            border-left: 2px solid #26a2ff;
          }
      }
  }
  &-main {
      flex: 1;
      overflow-x: hidden;
  }
}
</style>
