import React from 'react';
import Header from './../../components/header';
import NavLeft from './../../components/navleft';
import menuList from '../../contones/menuConfig';
import { Row, Col } from 'antd';
import './index.less';

export default class Home extends React.Component {
    state = {};

    componentWillMount () {
        this.setState({
            menuList
        })
    }

    render() {
        return(
            <div>
                <div className='welcome-page'>
                    <Header username={'执念'}/>
                    <Row>
                        <Col span={3} className='nav-left'>
                            <NavLeft menuList={this.state.menuList} />
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