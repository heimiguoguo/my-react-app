import React, { Component } from 'react';
import './demo2.css';
// import 'dragula/dist/dragula.css'
import dragula from 'react-dragula';
import Loadable from 'react-loadable';


// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';



class Container extends Component {

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let rows = document.getElementsByClassName('row');
        let cols = rows[0].getElementsByClassName('col');
        let target = cols[cols.length-1];
        var myChart = echarts.init(target);
        // 绘制图表
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
        let structure = this.props.structure;
        let containerStyle = {
            display: 'flex',
            flexDirection: 'column'
        }
        return (
            <div className='container1' style={containerStyle} ref={this.dragulaDecorator}>
                <Content structure={structure}></Content>
            </div>
        )
    }
    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            dragula([componentBackingInstance], options);
        }
    };
}

class Content extends Component {
    render() {
        let structure = this.props.structure;
        return (
            <React.Fragment>
                {
                    structure.rows ? (
                        structure.rows.map(item => {
                            if (!item.rows && !item.cols) {
                                return (<div className='row' style={item.style}>{item.id}</div>);
                            }
                            else if (item.row || item.cols) {
                                return (
                                    <div className='row' style={item.style} ref={this.dragulaDecorator}>{item.id}
                                        <Content structure={item}></Content>
                                    </div>
                                )
                            }
                            return null;
                        })
                    ) : (
                            structure.cols.map(item => {
                                if (!item.style.width) {
                                    item.style.flex = 1;
                                }
                                if (!item.rows && !item.cols) {
                                    if (item.components) {
                                        // let components = item.components.map(item => {
                                        //     return require(item);
                                        // })


                                        function MyLoadingComponent() {
                                            return <div>Loading...</div>;
                                        }
                                        let path = item.components[0];

                                        const LoadableAnotherComponent = Loadable({
                                            loader: () => import(`${path}`),
                                            loading: MyLoadingComponent
                                        });
                                        return (<div className='col' style={item.style}>{item.id}<LoadableAnotherComponent /></div>);
                                    }
                                    return (<div className='col' style={item.style}>{item.id}</div>);
                                }
                                else if (item.row || item.cols) {
                                    return (
                                        <div className='col' style={item.style}>{item.id}
                                            <Content structure={item}></Content>
                                        </div>
                                    )
                                }
                                return null;
                            }))
                }</React.Fragment>
        )
    }
    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            dragula([componentBackingInstance], options);
        }
    };
}


export default Container;