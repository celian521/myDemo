import { observable, action } from 'mobx'

class globalStore {
  @observable a = "a"
}

export default new globalStore()
