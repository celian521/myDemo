import { observable, action } from 'mobx'
import globalStore from './global'

class AppStore {
    @observable appConfig = require('./appConfig.json') // 所有APP的配置

    @observable activeKey = ''
    @observable panes = []

    // 打开微应用
    @action openAPP = id => {
        // globalStore.hasCloseSider =  true
        if(!this.panes.find(item => item.id===id)){
            let i = this.appConfig.findIndex(item => item.id===id)
            console.log('id', id);

            this.panes.push(this.appConfig[i])
            this.activeKey = id
        }
        this.activeKey = id
    }
    // 关闭微应用
    @action closeAPP = id => {
        let i = this.panes.findIndex(item => item.id===id)
        this.panes.splice(i,1)
        if(this.activeKey === id && this.panes.length){
            this.activeKey = this.panes[this.panes.length-1].id
        }
    }
    // 清空微应用
    @action clearAPP = () => {
        this.panes = []
    }
}

export default new AppStore()
