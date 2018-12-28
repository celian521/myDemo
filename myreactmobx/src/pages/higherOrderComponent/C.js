/***
 * 继承方式的高价组件
 */
import React, { Component } from 'react';

const modifyPorpsHOC = (WrapedComponent) => class NewComponent extends WrapedComponent {
    static displayName = `NewComponent(${getDisplayName(WrapedComponent)})`
    componentWillMount() {
        console.log('my is CCC')
    }
    render() {
        // const { user, ...otherProps } = this.props
        // this.props = otherProps
        // this.props = { k:'add', ...this.props }
        // return super.render()

        const element = super.render();
        const newStyle = {
            color: element.type === 'div' ? 'red' : 'green'
        }
        const newProps = { ...this.props,  style: newStyle }

        return React.cloneElement(element, newProps, element.props.children)
    }
}

function getDisplayName(WrapedComponent){
    return WrapedComponent.displayName || WrapedComponent.name || 'Component'
}

export default modifyPorpsHOC