import { observable, action } from 'mobx'

class HomeStore {
  @observable number = 100
  @observable kk = {a:"ste"}

  @action ackk = (key,v) => {
    this.kk[key] = v
  }

  @action increase = () => {
    this.number += 1
  }

  @action decrease = () => {
    this.number -= 1
  }
}

export default new HomeStore()
