import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';
import history from './../../history';
import './index.less';

export default class Header extends React.Component {

    logout = () => {
        console.log('ee')
        history.push('/')
    }

    render() {
        return(
            <Row className='header'>
                <Col span={18} className=''>
                    <Link to="/home">ERP管理系统</Link>
                </Col>
                <Col span={6}>
                    <div style={{float: 'right', fontSize: '14', textAlign: 'center'}}>
                        <Icon type="smile" />欢迎,{this.props.username}
                        <a className='logout' onClick={this.logout}>退出</a>
                    </div>
                </Col>
            </Row>
        )
    }
}