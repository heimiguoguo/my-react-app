import React, { Component } from 'react';
import Search from '../component/search'
import Tabs from '../component/tabs'
import Tab from '../component/tab'
import Clothes from '../component/clothes'
import img1 from './imgs/zlh1.jpg'
import img2 from './imgs/zlh2.jpg'
import img3 from './imgs/zlh3.jpg'
import './index.scss'


const Example = (props) => {
    let goodsInfo = {
        imgUrl: img1,
        goodsName: '公主裙',
        goodsCategory: 'dress',
        goodsMeterial: 'cotton',
        postage: true,
        discount: 8,
        address: '洪山区',
        price: '50元/天',
        salesVolumn: '100件'
    }
    return (
        <React.Fragment>
            <Search></Search>
            <Tabs value='second'>
                <Tab name='first' label='first'>one</Tab>
                <Tab name='second' label='second'>two</Tab>
                <Tab name='three' label='three'>three</Tab>
            </Tabs>
            <div className='itemContainer'>
                <Clothes goodsInfo={goodsInfo}></Clothes>
            </div>
        </React.Fragment>
    );
};

export default Example;