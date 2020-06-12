import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, DatePicker, Button, Form, Popconfirm } from 'antd';
import moment from 'moment'
import './AssetTable.scss'

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        const value = dataIndex === 'date' ? moment(record[dataIndex], "YYYY-MM-DD") : record[dataIndex]
        form.setFieldsValue({
            [dataIndex]: value,
        });
    };

    const save = async e => {
        try {
            let values = await form.validateFields();
            if (values.date) {
                values = { ...values, ...{ date: values.date.format('YYYY-MM-DD') } }
            }
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                {
                    dataIndex === 'date' ? <DatePicker ref={inputRef} allowClear={false} onPressEnter={save} onBlur={save} /> : <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                }
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
    }

    return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Date',
                dataIndex: 'date',
                width: '30%',
                editable: true,
            },
            {
                title: 'Expected',
                dataIndex: 'expected',
                editable: true
            },
            {
                title: 'Actual',
                dataIndex: 'actual',
                editable: true
            },
            {
                title: 'Operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.props.assets.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            scrollHeight: 0
        }
    }

    componentDidMount() {
        this.setTableScrollHeight()
        window.onresize = () => {
            this.setTableScrollHeight()
        }
    }

    getTableScrollHeight = () => {
        const tableHeight = document.getElementsByClassName('asset-table')[0].clientHeight
        const scrollHeight = tableHeight - 120
        console.log(scrollHeight)
        return scrollHeight
    }

    setTableScrollHeight = () => {
        const scrollHeight = this.getTableScrollHeight()
        this.setState({
            scrollHeight
        })
    }

    handleDelete = id => {
        const { deleteAsset } = this.props
        deleteAsset(id)
    };

    handleAdd = () => {
        const { addAsset } = this.props;
        const newData = {
            date: moment(new Date()).format('YYYY-MM-DD'),
            expected: 7000,
            actual: 7000
        };
        addAsset(newData)
    };

    handleSave = row => {
        const { updateAsset } = this.props
        updateAsset(row)
    };

    render() {
        const { assets } = this.props
        const { scrollHeight } = this.state
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    Add a row
                </Button>
                <Table
                    rowKey='id'
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={assets}
                    columns={columns}
                    scroll={{ y: scrollHeight }}
                />
            </div>
        );
    }
}

export default EditableTable