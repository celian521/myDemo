import React, { Component } from 'react';
import {observable, action} from 'mobx';
// import {PropTypes} from "prop-types";
import {observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import { Button, Alert  } from 'antd';
// import './assets/style/index.scss';
import Navbar from '../../components/navBar';
/*
  decoretor

*/

class Store {
   @observable cache = {queue:[],num:0}
//    @observable num = {a:0};
  //  number = 0
   @action add () {
     this.cache.queue.push(1);
    //  this.num += 1;
    //  console.log(this.cache, "->", this.num.a);
   }
   @action del () {
    this.cache.queue.shift(1);
    // this.num--;
    // console.log(this.cache);
  }
}

const store = new Store();

@observer
class Bar extends Component {
  static propTypes = {
    // queue: PropTypes.array
    queue: ObservablePropTypes.observableArray,
    // n: ObservablePropTypes.observableNumber
  }
  render () {
    const queue = this.props.queue;
    // const n = this.props.n
    return (
    <div>
    <span className='a'>
      == {queue.length} =={this.props.n}--</span>
      {console.log(queue)}
      <span className='b'>less</span>
    </div> )
  }
}

class Foo extends Component {
  static propTypes = {
    // cache: PropTypes.object
    cache: ObservablePropTypes.observableObject,
    // num: ObservablePropTypes.observableNumber
  }
  render () {
    const cache = this.props.cache;
    const num = this.props.num;
    return (
      <div>
        <Alert message="Success Text" type="success" />
        <Alert message="Success Text" type="info" />
        <Alert message="Success Text" type="warning" />
        <Alert message="Success Text" type="error" />
         <Button type="primary" onClick = {()=> this.props.add() }>加一</Button>
         <Button type="danger" onClick = {()=> this.props.del() }>减一</Button>
        <Bar queue = {cache.queue} n = {num}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar nav='form home'>2</Navbar>
        <Foo cache= {store.cache} add = {store.add} del = {store.del}></Foo>
      </div>
    );
  }
}

export default App;
