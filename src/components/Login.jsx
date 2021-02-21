import React, { useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import {
    Card,
    Form,
    Input,
    Button
} from 'antd';
import './Login.scss'
import fetch from 'cross-fetch'
import {useAuth} from '../App'


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const LoginForm = () => {

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };

    const onFinish = async (values) => {
        console.log(values)
        try {
            const res = await fetch('/login', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //make sure to serialize your JSON body
                body: JSON.stringify(values)
            });
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            const result = await res.json();
            console.log(result)
            if (result.user) {
                auth.signin(() => {
                    history.replace(from);
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="login">
            <Card
                cover={
                    <div className='logo'>
                        <img src='/images/logo.png' alt='' style={{ width: 200 }}></img>
                    </div>
                }
                className='login_card'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <div className='login_form_footer'>
                            <a href="/register">注册</a>
                            <a href="/reset_password">忘记密码</a>
                        </div>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    );
};

export default LoginForm