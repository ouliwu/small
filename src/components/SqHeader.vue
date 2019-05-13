<template>
    <mt-header title="商城">
        <mt-button icon="back" @click="goback" slot="left">返回</mt-button>
    </mt-header>
</template>

<script>
export default {
  name: 'sq-header',
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
