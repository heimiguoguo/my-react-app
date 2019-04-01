import React, { Component } from 'react';
import './clothes.scss'

export default class clothes extends Component{
    render(){
        let {imgUrl, goodsName, goodsCategory, goodsMeterial, postage, discount, address, price, salesVolumn} = this.props.goodsInfo;
        return (
            <React.Fragment>
                <img src={imgUrl} alt='img url invalid'></img>
                <div className='goodsName'>{goodsName}</div>
                <div className='goodsDesc'>
                    <span className='goodsCategory'>{goodsCategory}</span> | 
                    <span className='goodsMeterial'>{goodsMeterial}</span>
                </div>
                <div>
                    <span className='postage'>{postage?'包邮':'不包邮'}</span>
                    <span className='discount'>{discount+'折'}</span>
                    <span className='address'>{address}</span>
                </div>
                <div>
                    <span className='price'>{price}</span>
                    <span className='salesVolumn'>{salesVolumn}</span>
                </div>
            </React.Fragment>
        )
    }
}