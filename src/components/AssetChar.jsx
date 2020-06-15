import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';


class AssetChart extends Component {
    getOption = () => {
        console.log(this.props)
        const { assets } = this.props
        return {
            title: {
                text: '资产走势图',
                // title居中显示
                x: 'center',
                textAlign: 'center',
                textStyle: {
                    color: 'red'
                }
            },
            legend: {
                type: 'plain',
                right:200
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
                data: assets.map(item => item.date)
            },
            yAxis: {},
            series: [
                {
                    name: '预期',
                    type: 'bar',
                    data: assets.map(item => item.expected)
                },
                {
                    name: '实际',
                    type: 'bar',
                    data: assets.map(item => item.actual)
                }]
        }
    }
    render() {
        return (
            <ReactEcharts ref={e => window.reactEcharts2 = e} option={this.getOption()}>

            </ReactEcharts>
        )
    }
}

export default AssetChart