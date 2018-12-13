import Vue from 'vue';

export default {
  install(Vue, methods) {
    if (this.install.installed) return false;
    Vue.prototype.$utils = this;
    this.install.installed = true;
  },
  a() {
    return "test!!"
  }
};
