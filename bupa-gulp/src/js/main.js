// Global JS
Vue.filter('moment', function (value, format) {
  return value ? moment(value).format(format || 'YYYY/MM/DD') : ''
})

Vue.filter('sexMap', function (value) {
  var a = ['未知', '男', '女']
  return a[value || 0]
})

// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })
