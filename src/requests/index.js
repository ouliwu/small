import axios from 'axios'

import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create()

ajax.interceptors.request.use(config => {
  Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.data.code === 200) {
    return resp.data.data
  } else {
    // 在实际开发中，这里应该有一个后端返回的错误信息
    Toast('出错了')
  }
})

// 登录页数据
export const getHomeData = () => {
  return ajax.get('/api/tab/1?start=0')
}
// cartNav
export const getCartNav = () => {
  return ajax.get('api/tabs')
}
// 获取分类数据r
export const getProductList = (cateID, start = 0) => {
  return ajax.get(`/api/tab/${cateID}?start=${start}`)
}
// 详情页
export const getDetails = (id) => {
  return ajax.get(`/api/detail?id=${id}`)
}
