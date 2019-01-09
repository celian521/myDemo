import Taro from '@tarojs/taro';
import Event from './events';

const myEvent = new Event(); //实例化一个事件管理器

export function getEvent() {
  return myEvent
}
