import React from 'react';
import { Form, Button, Input, Table } from 'antd';
import './index.less';

export default class Order extends React.Component {
    render() {
        return(
            <div>
                <div className='topFilterWrap crad-wrap'>
                    <FilterWrap />
                </div>
                <div>
                    <Button className='operation-buttons'>订单详情</Button>
                </div>
                <Table

                />
            </div>
        )
    }
}

class FilterWrap extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

FilterWrap = Form.create({})(FilterWrap);