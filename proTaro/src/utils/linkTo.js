import Taro from '@tarojs/taro'

const tabBarPath = [
  '/pages/home/index',
  '/pages/activity/index',
  '/pages/plan/index',
  '/pages/member/index'
]

export default function linkTo(options) {
  let {
    url,
    title = '',
    params = {},
    method = 'navigateTo'
  } = options
  let type = method
  const hasTabBar = tabBarPath.find(path => url === path)
  if(!!hasTabBar) type = 'switchTab'
  if(params.id && !hasTabBar) {
    url = `${url}?id=${params.id}`
  }
  Taro[type]({ url })
}
