import { observable } from 'mobx'

class NodeStore {
  @observable tplData = [
    {component:'DemoA', name:'this is DemoA',
    children: [
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

}

export default new NodeStore()
