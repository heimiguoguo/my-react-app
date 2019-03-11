import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './EchartsDemo.css'

class EchartsTest extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
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
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col'></div>
                    <div id='main' style={{width:100,height:100}} className='col'></div>
                </div>
            </div>
            // <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest;