import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class NavLeft extends React.Component {

    componentWillMount () {
        let menuList = this.props.menuList;
        let menus = this.listMenu(menuList);
        var key = window.location.hash;
        this.setState({
            menus,
            selectedKeys: key
        }, function() {
            setTimeout( () => {
                console.log(menus)
            }, 2000)
        })
    }

    // 遍历菜单树
    listMenu = (data, key='') => {
        return data.map((item) => {
            if(item.children) {
                return (
                    <SubMenu key={key+item.key} title={item.title}>
                        {this.listMenu(item.children, key + item.key)}
                    </SubMenu>
                )
            }
            return (
                <MenuItem key={key+item.key} name={item.title}>
                    <Link to={key+item.key}>{item.title}</Link>
                </MenuItem>
            )
        })
    }

    handleClick = (e) => {
        this.setState({
            selectedKeys:e.key
        })
    }



    render() {
        return(
            <div style={{height: "100%"}}>
                <Menu
                    className='nav-left'
                    selectedKeys={[this.state.selectedKeys]}
                    onClick={this.handleClick}
                    mode='inline'
                    theme='light'
                >
                    {this.state.menus}
                </Menu>
            </div>
        )
    }
}