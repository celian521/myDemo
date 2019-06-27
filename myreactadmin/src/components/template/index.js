/**
 *
 * import Demotpl from '@/components/template';
 * <Demotpl nodeData= {this.props.tplData} />
 *
 */
import React, { Component } from 'react';
import Tpl from './base';
import Myself from '.';

class Base extends Component {
  render() {
    const Mycomponent = Tpl['DemoA']
    return (
      <>
        <Mycomponent />
        {/* {
          this.props.nodeData.map((item, index) => {
            const Mycomponent = Tpl[item.component]
            return  <Mycomponent {...item} key={index}>
                      { item.children && <Myself nodeData={item.children} /> }
                    </Mycomponent>
          })
        } */}
      </>
    );
  }
}

export default Base
