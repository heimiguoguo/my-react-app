import React, { Component } from 'react';
import ReactEchartsDemo from './ReactEchartsDemo/ReactEchartsDemo';
import ReactEchartsDemo2 from './ReactEchartsDemo/ReactEchartsDemo2';
import './FlexDemo.css';


class FlexDemo extends Component {
    constructor(){
        super();
        this.state = {
            expand:true,
            echartsContainerStyle:{
                width:1000
            }
        }
    }
    toggle(){
        console.log('hh');
        this.setState({
            expand:!this.state.expand
        })
    }
    resizeReactEchartsDemo(){
        window.reactEcharts.getEchartsInstance().resize();
    }
    resizeReactEchartsDemo2(){
        window.reactEcharts2.getEchartsInstance().resize();
    }
    increaseReactEcharts2Width(){
        // let domArray = document.getElementsByClassName("col2");
        // for(let dom of domArray){
        //     dom.style.width = parseInt(dom.style.width.replace("px", "")) + 100 + "px";
        // }

        // this.setState({
        //     echartsContainerStyle:{
        //         width: this.state.echartsContainerStyle.width + 100
        //     }
        // })
        // this.resizeReactEchartsDemo();
        
    }
    decreaseReactEcharts2Width(){
        // let domArray = document.getElementsByClassName("col2");
        // for(let dom of domArray){
        //     dom.style.width = parseInt(dom.style.width.replace("px", "")) - 100 + "px";
        // }

        // this.setState({
        //     echartsContainerStyle:{
        //         width: this.state.echartsContainerStyle.width - 100
        //     }
        // })
    }
    render() {
        // let echartsContainerStyle = {
        //     width:1000
        // }
        console.log(this.state.echartsContainerStyle.width)
        return (
            <div id="container">
                <div className="row">
                    <div className="col">
                        <div id="test"></div>
                    </div>
                    <div className="col col2">
                    {/* <div className="col col2" style={this.state.echartsContainerStyle}> */}
                        <div>
                            <button onClick={this.increaseReactEcharts2Width.bind(this)}>increaseReactEcharts2Width</button>
                            <button onClick={this.decreaseReactEcharts2Width.bind(this)}>decreaseReactEcharts2Width</button>
                        </div>
                        <div>
                            <button onClick={this.resizeReactEchartsDemo}>resizeReactEchartsDemo</button>
                            <button onClick={this.resizeReactEchartsDemo2}>resizeReactEchartsDemo2</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="echartsContainer" className="col">
                        <ReactEchartsDemo></ReactEchartsDemo>
                    </div>
                    <div id="echartsContainer2" className="col col2">
                    {/* <div id="echartsContainer2" className="col col2" style={this.state.echartsContainerStyle}> */}
                        <ReactEchartsDemo2 expand={this.state.expand} toggle={this.toggle.bind(this)}></ReactEchartsDemo2>
                    </div>
                </div>
            </div>
        )
    }
}


export default FlexDemo;