import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';



class EchartsDemo extends Component {
    constructor(){
        super();
        this.state = {
            expand:true
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        window.myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        window.myChart.setOption({
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
        // window.myChart.on('finished', function () {
        //     console.log('Echarts resized...');
        //     window.myChart.resize();
        // });
        setTimeout(function(){
            console.log('Echarts resized...');
            console.log(new Date());
            window.myChart.resize();
        },1000)
    }
    toggle(){
        this.setState({
            expand:!this.state.expand
        })
    }
    render() {
        return (
            <div>
                <div id='main' style={{height: 280, flex: 1, display: this.state.expand?'':'none'}}></div>
                {/* <button onClick={this.toggle.bind(this)}>toggle</button> */}
            </div>
        )
    }
}


export default EchartsDemo;