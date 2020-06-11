import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';


class ReactEchartsDemo extends Component {
    getOption() {
        return {
            title: {
                text: '资产走势图',
                // title居中显示
                x:'center',
                textAlign: 'center',
                textStyle: {
                    color: 'red'
                }
            },
            tooltip: {},
            toolbox: {
                itemSize: 16,
                feature: {
                    saveAsImage: {
                        title: 'save'
                    }
                }
            },
            xAxis: {
                data: ["2020-6-30", "2020-7-9", "2020-7-19", "2020-7-30", "2020-8-9", "2020-8-19", "2020-8-30", "2020-9-9", "2020-9-19"]
            },
            yAxis: {},
            series: [{
                name: '预期',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
    render() {
        return (
            <ReactEcharts ref={e => window.reactEcharts2 = e} option={this.getOption.bind(this)()}>

            </ReactEcharts>
        )
    }
}

export default ReactEchartsDemo;