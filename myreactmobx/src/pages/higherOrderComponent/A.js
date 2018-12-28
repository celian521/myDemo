import React, { Component } from 'react';

import d from './D'

@d('celian')
class De extends Component {
    componentWillMount() {
        console.log('my is AAA')
    }
    render() {
        return (
            <div>
                高阶组件 <br />
                name: {this.props.name} <br />
                age: {this.props.age} <br />
                sex: {this.props.sex} <br />
                <input type="text" onChange = {this.props.onInput} />
                {this.props.value}
            </div>
        );
    }
}

export default De;
// export default d("celian")(De);