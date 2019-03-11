import React, { Component } from 'react'


class Child extends Component {

    render() {
        let childStyle = {
            width: 100,
            height: 100,
            backgroundColor: 'red',
            margin: 5
        }
        return (
            <div className={this.props.index===this.props.activeItemIndex?'active':''} style={childStyle} onClick={e => this.props.handleClick(this.props.index, e)}></div>
        )
    }
}


class Parent extends Component {
    constructor() {
        super();
        this.state = {
            activeItemIndex: 1
        }
    }
    handleChildClick(index, e) {
        this.setState({
            activeItemIndex: index
        })
        // e.target.style.backgroundColor = 'green'
    }
    render() {
        let arr = [1, 2, 3, 4, 5];
        let ListItems = arr.map((item, index) => <Child index={index} activeItemIndex={this.state.activeItemIndex} handleClick={this.handleChildClick.bind(this)}></Child>)
        return (
            <div className='parent'>
                {ListItems}
            </div>
        )
    }
}


export default Parent;