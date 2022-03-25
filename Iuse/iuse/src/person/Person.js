import React from 'react'
import { Layout } from 'antd';
import Headshot from '../Components/Headshot';
import { Link } from 'react-router-dom';
import Logo from '../Image/peiqi.jpg'
import UserDropdown from '../Components/UserDropdown';
const { Header } = Layout;


export default function Person() {
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
                </Header>
            </Layout>
        </>
    )
}
