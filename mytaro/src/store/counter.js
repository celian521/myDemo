import { observable } from 'mobx'

const counterStore = observable({
  counter: 0,
  name:'Bar',
  loading:true
})


counterStore.changecom = function () {
  this.loading = false
  this.name = this.name=='bar'?'bas':'bar'
  setTimeout(()=>{
    this.loading = true
  }, 500);
}

counterStore.increment = function () {
  this.counter++
}

counterStore.decrement = function() {
  this.counter--
}

counterStore.incrementAsync = function() {
  setTimeout(() => {
    this.counter++
  }, 1000);
}

export default counterStore
