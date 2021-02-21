import React, { useState } from 'react'
import { Layout, Tabs } from 'antd'
import Header from './Header'
import Footer from './Footer'
import './Index.scss'

const { Content } = Layout
const { TabPane } = Tabs


function callback(key) {
    console.log(key);
}
const App = () => {
    return <div className="app">
        <Layout>
            <Header></Header>
            <Content>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Content>
            {/* <Footer></Footer> */}
        </Layout>
    </div>
}

export default App