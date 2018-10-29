import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ImageSlider from './ImageSlider';
import './Navigation.css'
import Routes from './Routes';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Navigation extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span><Link to='/'>E-Comm</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3"><a onClick={this.props.handleClick}>Login</a></Menu.Item>
              <Menu.Item key="4"><a onClick={this.props.handleSignUp}>Sign Up</a></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="folder-open" /><span>Categories</span></span>}
            >
              <Menu.Item key="6"><Link to="/Food">Food</Link></Menu.Item>
              <Menu.Item key="7">Clothing</Menu.Item>
              <Menu.Item key="8">Footwear</Menu.Item>

            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>About</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {/* {<ImageSlider/>} */}
            <Routes/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            E-Comm ©2018 Created by Volans
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Navigation;