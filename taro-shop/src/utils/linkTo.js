import Taro from '@tarojs/taro'

const tabBarPath = [
  '/pages/home/index',
  '/pages/member/index'
]

const PAGE_WEBVIEW = '/pages/webview/index'

export default function linkTo(options) {
  let {
    url,
    title = '',
    params = {},
    method = 'navigateTo'
  } = options
  let type = method

  // 设置页面标题
  // if (!!title) Taro.setNavigationBarTitle({ title })

  // 判断 是否 tabBar 页面
  const hasTabBar = tabBarPath.find(path => url === path)
  if (!!hasTabBar) type = 'switchTab'

  // 是否带参熟
  if (params.id && !hasTabBar) {
    url = `${url}?id=${params.id}`
  }

  // 外部页面
  const hasWebView = /^https?:\/\//.test(url)
  if (hasWebView) {
    Taro.navigateTo({
      url: `${PAGE_WEBVIEW}?url=${url}&title=${title}`
    })
  } else {
    // 执行跳转
    Taro[type]({ url })
  }
}
