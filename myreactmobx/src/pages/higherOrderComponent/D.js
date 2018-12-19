import React, { Component } from 'react';

function d(WrappedComponent) {
    return class D extends Component {
        render() {
            return (
                <div>
                    YPDDD
                    <WrappedComponent />
                    890
                </div>
            );
        }
    }
}

export default d;