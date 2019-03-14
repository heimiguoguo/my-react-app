import React, { Component } from 'react';
import './PunchCard.css'
class PunchCard extends Component {
    componentDidMount() {
        var box = document.getElementById("toppoint");
        if (box) { //此处在加一层判断，更加严密，如果box存在的情况下获取
            console.log(box.style.width);
        }
    }
    setWidth(){
        document.getElementById("toppoint").style.width = '200px';
    }
    render() {
        return (
            <div>
                <button onClick={this.setWidth}>setWidth</button>
                <div className="point A" id="toppoint"></div>
            </div>
        );
    }
}
export default PunchCard;