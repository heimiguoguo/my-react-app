import React, { Component } from 'react';
import './tab.scss'


export default class Tab extends Component{
    render(){
        console.log('hello')
        return (
            <React.Fragment>
                <div className='tab'>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}