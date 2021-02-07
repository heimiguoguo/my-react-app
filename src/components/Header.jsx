import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout
export default () => {
    return <Header>
        <img src="/images/logo.png" alt="" />
        <div>
            <a href="">
                <img src="/images/grzx.png" alt=""/>
            </a>
            <a href="">
                <img src="/images/gwc.png" alt=""/>
            </a>
        </div>
    </Header>
}