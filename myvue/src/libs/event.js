/**
 *  非父子组件通信 - $on和$emit
 *
 *  eg.
 *  import event from "@/libs/event.js";
 *
 *  event.$on('foo', e => {
 *		console.log("foo", e);
 *  })
 *
 *  event.$emit('foo', "ste")
 *
 */

import Vue from 'vue';

const event = new Vue({});
export default event;
