import React from 'React';
import './index.less';
import { Button, Input, Icon, Form, message } from 'antd';
// import BaseServer from './../../components/baseServer';
// import history from './../../history';
// import urls from './../../contones/urls';

const FormItem = Form.Item;

export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    // 登录
    loginSubmit = (value) => {
        // BaseServer.ajax({
        //     url:urls.login,
        //     data: value
        // }).then((res) => {
        //     if (res.code == 0) {
        //         history.push('/home')
        //     } else {
        //         message.error(`用户名或密码错误!`)
        //     }
        // })
    }
    
    render() {
        return (
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

    // username
    checkUserName = (rule, value, callback) => {
        let reg = /1\d{10}/;
        if (!value) {
            callback('请输入用户名!');
        } else if(!reg.test(value)) {
            callback('用户名必须是手机号!');
        } else {
            callback();
        }
    }
    
    // 登录 
    loginSubmit = (e) => {
        e.preventDefault();
        let data = this.props.form.getFieldsValue();
        this.props.loginSubmit(data);   
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.loginSubmit}>
                <FormItem>
                    {
                        getFieldDecorator('username', {
                            rules: [{validator:this.checkUserName}]
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

LoginForm = Form.create({})(LoginForm);