 /**
  *  @Title   高阶组件
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2018
  */

import React, { Component } from 'react';
import A from './A'
import B from './B'
import E from './E'

class Indexheig extends Component {
    render() {
        return (
            <div>
                ==
                <A name="stephen" age={16} />
                <B user='jim' set='myot' />
                <E />
                ==
            </div>
        );
    }
}

export default Indexheig;