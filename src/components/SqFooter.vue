<template>
    <ul class="sq-footer">
        <router-link v-for="nav in navs"
        :key="nav.name"
        :to="nav.path"
        tag="li">
            <span class="icon" v-html="nav.meta.icon"></span>
            <span class="title">{{nav.meta.title}}</span>
        </router-link>
    </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
    name: 'sq-footer',
    data () {
        return {
            navs:routes.filter(route => route.meta.isTabItem === true)
        }
    }
}
</script>

<style lang="scss" scoped>
    .sq-footer {
        height: 52px;
        border-top: 1px solid #dedede;
        display:flex;
        li {
            color:#787878;
            flex: 1;
            text-align:  center;
            span {
                display: block;
                 &.icon {
                     font-family: iconfont;
                     font-size: 20px;
                    height: 32px;
                    line-height: 32px;
            }
            &.title {
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                }
            }
            &.router-link-exact-active,
            &.router-link-active{
                color:#2979ff;
            }
        }
       
    }
</style>
