import React from 'react';
import './index.less';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                home
                {this.props.children}
            </div>
        )
    }
}