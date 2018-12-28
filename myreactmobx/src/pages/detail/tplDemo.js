import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Demotpl from '../../components/template';

@inject(({nodeStore})=>({
    tplData: nodeStore.tplData
}))

@observer
class Ab extends Component {
    state = {  }
    render() {
        return (
            <>
                <Demotpl nodeData= {this.props.tplData} />
            </>
        );
    }
}

export default Ab;
