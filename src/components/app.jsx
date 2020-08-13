import React, { useState } from 'react'
import { Button } from 'antd'
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import EditableTableContainer from '../containers/AssetTableContainer'
import AssetChartContainer from '../containers/AssetChartContainer'
import './App.scss'

const App = () => {
    const [tableVisible, setTableVisible] = useState(true)
    return <div className="app">
        {
            !tableVisible && <Button type="primary" shape="circle" icon={<EditOutlined />} className='edit-button' onClick={() => setTableVisible(!tableVisible)} />
        }
        <div className="asset-chart">
            <AssetChartContainer></AssetChartContainer>
        </div>
        {
            tableVisible && <div className="asset-table">
                <Button type="primary" shape="circle" icon={<CloseOutlined />} className='close-button' onClick={() => setTableVisible(!tableVisible)} />
                <EditableTableContainer></EditableTableContainer>
            </div>
        }
    </div>
}

export default App