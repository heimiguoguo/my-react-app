import React, { Component } from 'react'
import { Spinner } from 'spin.js';
import 'spin.js/spin.css'

export default class Father extends Component {
    constructor() {
        super();
        this.state = {
            spinning1: true,
            spinning2: true,
            opts1: {
                left: '50%'
            },
            opts2: {
                color: 'red'
            }
        }
    }

    componentDidMount() {
        console.log(this.refs['child-component'].refs['child-h1'])
    }

    removeSpin1() {
        this.setState({
            spinning1: false
        })
    }

    recoverSpin1() {
        this.setState({
            spinning1: true
        })
    }

    changeOpts1() {
        this.setState({
            opts1: {
                left: '40%'
            }
        })
    }

    changeOpts2() {
        this.setState({
            opts2: {
                color: 'orange'
            }
        })
    }

    render() {
        return <div>
            <button onClick={this.removeSpin1.bind(this)}>remove load1</button>
            <button onClick={this.recoverSpin1.bind(this)}>recover load1</button>
            <button onClick={this.changeOpts1.bind(this)}>update load1</button>
            <button onClick={this.changeOpts2.bind(this)}>update load2</button>
            <ChildComponent ref='child-component' spinning={this.state.spinning1} opts={{ ...this.state.opts1 }}></ChildComponent>
            <ChildComponent ref='child-component' spinning={this.state.spinning2} opts={{ ...this.state.opts2 }}></ChildComponent>
        </div>
    }
}

class ChildComponent extends Component {
    static otps = {
        lines: 13, // The number of lines to draw
        length: 38, // The length of each line
        width: 17, // The line thickness
        radius: 45, // The radius of the inner circle
        scale: 1, // Scales overall size of the spinner
        corners: 1, // Corner roundness (0..1)
        color: '#ff0080', // CSS color or array of colors
        fadeColor: 'transparent', // CSS color or array of colors
        speed: 1, // Rounds per second
        rotate: 0, // The rotation offset
        animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
        direction: 1, // 1: clockwise, -1: counterclockwise
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        className: 'spinner', // The CSS class to assign to the spinner
        top: '50%', // Top position relative to parent
        left: '50%', // Left position relative to parent
        shadow: '0 0 1px transparent', // Box-shadow for the lines
        position: 'relative' // Element positioning
    }
    constructor(props) {
        super(props);
        this.state = {
            opts: Object.assign({}, ChildComponent.otps, this.props.opts ? this.props.opts : {})
        }
    }
    componentDidMount() {
        var target = this.refs['child-h1'];
        this.spinner = new Spinner(this.state.opts).spin(target);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            opts: Object.assign({}, ChildComponent.otps, newProps.opts ? newProps.opts : {})
        })
    }

    componentDidUpdate() {
        var target = this.refs['child-h1'];
        if (this.spinner) {
            this.spinner.stop();
        }
        this.spinner = new Spinner(this.state.opts).spin(target);
    }

    render() {
        return this.props.spinning ? (
            <div>
            <div ref="child-h1" style={{ width: 500, height: 500, borderTopStyle: 'solid', borderColor: 'red', borderWidth: 2 }}>hello</div>
        </div>
        ) : null
    }
}