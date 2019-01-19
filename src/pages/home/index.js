import React from 'react';
import Header from './../../components/header';
import NavLeft from './../../components/navleft';
import { Row, Col } from 'antd';
import './index.less';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <div className='welcome-page'>
                    <Header username={'执念'}/>
                    <Row>
                        <Col span={3} className='nav-left'>
                            <NavLeft />
                        </Col>
                        <Col span={21} className='right-container'>
                            {this.props.children}
                        </Col>
                    </Row>
                </div>
                {/* {this.props.children} */}
            </div>
        )
    }
}