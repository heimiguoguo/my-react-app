import React, { Component } from 'react';
import './search.scss'


export default class Search extends Component{
    constructor(){
        super();
        this.state = {
            showBtn: false
        }
    }
    onInputFocus(){
        this.setState({
            showBtn: true
        })
    }
    render(){
        return (
            <React.Fragment>
                <input className='searchInput' placeholder='' onFocus={this.onInputFocus.bind(this)}></input>
                {
                    this.state.showBtn ? <button className='searchBtn'>搜索</button> : null
                }
            </React.Fragment>
        )
    }
}