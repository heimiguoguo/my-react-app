import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import 'dragula/dist/dragula.css';
import Dragula from 'react-dragula';
import './DragulaDemo.css';


class DragulaDemo extends Component {
    render() {
        return (
            <div className='container' ref={this.dragulaDecorator}>
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
                <div>E</div>
                <div>F</div>
                <div>G</div>
            </div>
        )
    }
    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    }
}

export default DragulaDemo;