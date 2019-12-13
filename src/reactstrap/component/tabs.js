import React, { Component } from 'react';
import Tab from './tab'
import './tabs.scss'


export default class Tabs extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTabName: this.props.value
        }
    }
    onTabClick(e){
        this.setState({
            activeTabName: e.target.name
        })
    }
    render(){
        let tabList = this.props.children;
        return (
            <React.Fragment>
                <div className='tabs_header'>
                {
                    tabList.map(item => {
                        return (
                            <div key={item.props.name} className={`tab ${this.props.value===item.props.name?'active':''}`} onClick={this.onTabClick.bind(this)}>{item.props.label}</div>
                        )
                    })
                }
                </div>
                <div className='tabs_content'>
                {
                    tabList.filter(item => {
                        return this.props.value === item.props.name
                    })
                }
                </div>
            </React.Fragment>
        )
    }
}