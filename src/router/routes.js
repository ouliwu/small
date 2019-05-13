import SqFooter from '@/components/SqFooter'
const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
const Mine = () => import('@/views/Mine')
const Cart = () => import('@/views/Cart')
const CartList = () => import('@/views/CartList')
const Details = () => import('@/views/Details')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isTabItem: false
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: SqFooter
    },
    meta: {
      isTabItem: true,
      title: '首页',
      icon: '&#xe60b;'
    }
  },
  {
    path: '/mall',
    name: 'mall',
    components: {
      default: Mall,
      footer: SqFooter
    },
    children: [{
      path: ':cateID',
      component: CartList
    }],
    meta: {
      isTabItem: true,
      title: '商城',
      icon: '&#xe608;'

    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: SqFooter
    },
    meta: {
      isTabItem: true,
      title: '我的',
      icon: '&#xe606;'

    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      footer: SqFooter
    },
    meta: {
      isTabItem: true,
      title: '商品',
      icon: '&#xe607;'

    }
  },
  {
    path: '/details/:id',
    name: 'details',
    components: {
      default: Details
    },
    meta: {
      isTabItem: true
    }
  }
]
