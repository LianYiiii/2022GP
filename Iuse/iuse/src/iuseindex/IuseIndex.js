import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './IuseIndex.css'
import Headshot from '../Components/Headshot';
import { Link } from 'react-router-dom';
import Logo from '../Image/peiqi.jpg'
import UserDropdown from '../Components/UserDropdown';
import { Empty } from 'antd';
import Totop from '../Components/Totop';

const { Header, Content, Footer } = Layout;

export default function IuseIndex() {
  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 8%' }}>
          <div className="logo">
            <Link to='/'>
              <img className='logoimg' src={Logo}></img>
            </Link>
          </div>
          {/* <span className='header-username' style={{ color: 'white', float: 'right', marginLeft: 30 }}>LianYii</span> */}
          <div className='headshot'><Headshot /><UserDropdown /></div>

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to='/' >
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='trashbin' >
                回收站
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='tree' >
                预览
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {/*  <Empty />*/}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 GraPro-IUSE-online-disk Created by LHL</Footer>
        <Totop />
      </Layout>

    </>
  )
}
