import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';


class ReactEchartsDemo extends Component{
    getOption(){
        return {
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
    render(){
        return (
            <ReactEcharts ref={e=>window.reactEcharts=e} option={this.getOption.bind(this)()}>

            </ReactEcharts>
        )
    }
}

export default ReactEchartsDemo;