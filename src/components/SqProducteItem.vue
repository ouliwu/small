<template>
  <router-link tag="div" class="sq-producte-item" :to="`/details/${id}`">
    <div class="sq-producte-item__img">
      <img  :src="img" :alt="title"/>
    </div>
    <p class="sq-producte-item__title">{{title}}</p>
    <div class="sq-producte-item__footer">
      <span class="price">¥{{price}}</span><span class="btn" @click.stop="addCart">加入购物车</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'SqProducteItem',
  props: {
    id: Number,
    price: Number,
    img: String,
    title: String
  },
  methods: {
    addCart () {
      console.log('加入购物车')
    }
  }
}
</script>

<style lang="scss" scoped>
.sq-producte-item {
  width: 50%;
  display: inline-block;
  padding: 8px;
  box-sizing: border-box;
  &__img {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    img {
      max-width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
    }
  }
  &__title {
    height: 30px;
    line-height: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .price {
      color: #f00;
    }
    > .btn {
      color: #fff;
      background: #26a2ff;
      padding: 5px;
      border-radius: 4px;
    }
  }
}

</style>
