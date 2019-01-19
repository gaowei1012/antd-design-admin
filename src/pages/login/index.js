import React from 'react';
import './index.less';
import { Button, Icon, Input, Form, message } from 'antd';

export default class Login extends React.Component {

    loginSubmit = (value) => {
        console.log(value);
    }

    render() {
        return(
            <div className="login-page">
                <div className='login-conent-wrap'>
                    <div className='login-content'>
                        <div className='word'>通用<br/>ERP管理系统</div>
                        <div className='login-box'>
                            <div className='title'>欢迎使用</div>
                            {/* login表番表单页 */}
                            <LoginForm loginSubmit={this.loginSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class LoginForm extends React.Component {

    loginSubmit = (e) => {
        e.preventDefault();
        let data = this.props.form.getFieldsValue();
        this.props.loginSubmit(data);   
    }

    checkUserName = (rule, value, callback) => {
        let reg = /1\d{10}/;
        if (!value) {
            callback('请输入用户名!');
        } else if (!reg.test(value)) {
            callback('用户名必须是手机号!');
        } else {
            callback();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.loginSubmit}>
                <Form.Item>
                    {
                        getFieldDecorator("username", {
                            rules: [{validator: this.checkUserName}]
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />} type="text" placeholder="用户名" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator("password", {
                            rules: [{required: true, message: '请输入密码!'}]
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="密码" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type='default' htmlType='submit' className='login-form-button'>登录</Button>
                </Form.Item>
            </Form>
        )
    }
}

LoginForm = Form.create({})(LoginForm);