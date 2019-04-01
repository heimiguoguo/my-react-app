import React, { Component } from 'react';
import './ResponsiveLayout.css';
import ReactEchartsDemo from './ReactEchartsDemo'
import ReactEchartsDemo2 from './ReactEchartsDemo2'
import OpenlayersDemo from './OpenlayersDemo'


class ResponsiveLayout extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <OpenlayersDemo></OpenlayersDemo>
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ReactEchartsDemo></ReactEchartsDemo></div>
                    <div className='col' id='test' style={{width:400}}>
                        <ReactEchartsDemo2></ReactEchartsDemo2>
                    </div>
                </div>
            </div>
        )
    }
}


export default ResponsiveLayout;