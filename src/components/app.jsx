import React, { useState } from 'react'
import { Button } from 'antd'
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import EditableTable from './EditableTable'
import AssetChart from '../ReactEchartsDemo/ReactEchartsDemo2'
import './app.scss'

const App = () => {
    const [tableVisible, setTableVisible] = useState(true)
    return <div className="app">
        {
            !tableVisible && <Button type="primary" shape="circle" icon={<EditOutlined />} className='edit-button' onClick={() => setTableVisible(!tableVisible)} />
        }
        <div className="asset-chart">
            <AssetChart></AssetChart>
        </div>
        {
            tableVisible && <div className="asset-table">
                <Button type="primary" shape="circle" icon={<CloseOutlined />} className='close-button' onClick={() => setTableVisible(!tableVisible)} />
                <EditableTable></EditableTable>
            </div>
        }
    </div>
}

export default App