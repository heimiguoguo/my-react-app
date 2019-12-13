import React from 'react'

import { Row, Col } from 'antd';
import EditCell from './EditCell'
import EditRow from './EditRow'
import EditableTable from './EditableTable'
import DragSortingTable from './DragSortingTable'
import Refs from './Refs'


export default class Demo extends React.Component {
    render() {
        return (
            <>
                <Row type="flex" gutter={12}>
                    {/* <Col span={12}>
                    <EditCell></EditCell>
                </Col>
                <Col span={12}>
                    <EditRow></EditRow>
                </Col> */}
                    <Col span={12}>
                        <EditableTable></EditableTable>
                    </Col>
                    <Col span={12}>
                        <Refs></Refs>
                    </Col>
                </Row>
            </>
        )
    }
}