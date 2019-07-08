// Global JS
Vue.filter('moment', function (value, format) {
  return value ? moment(value).format(format || 'YYYY/MM/DD') : ''
})

Vue.filter('sexMap', function (value) {
  var a = ['请选择', '男', '女']
  return a[value || 0]
})
