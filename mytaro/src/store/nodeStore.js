import { observable, action } from 'mobx'

class NodeStore {
  @observable tplData = [
    {component:'DemoA', name:'this is DemoA',
    children: [
      {component:'DemoBadge', name:'测试', num: 21, btnText: "aa"},
      {component:'DemoB',  name:'this is BBBBB'}
    ]
  },
    {component:'DemoB',  name:'this is abcdefg',
      children: [
        {component:'DemoA', name:'this is kkkkkkkk'},
        {component:'DemoB',  name:'this is fg'}
      ]
    },
    {component:'DemoA', name:'this is mkkkkk'},
  ]

  // @observable number = 100
  // @observable kk = {a:"ste"}

  // @action ackk = (key,v) => {
  //   this.kk[key] = v
  // }

  // @action increase = () => {
  //   this.number += 1
  // }

  // @action decrease = () => {
  //   this.number -= 1
  // }
}

export default new NodeStore()
