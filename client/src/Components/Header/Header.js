import React, { useContext, useState } from 'react';
import './Header.css';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';



function Header() {

    const { user, logout } = useContext(AuthContext)
    console.log(user)
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name)

    let username = "";
    if (user) {
        username = user.username
    }

    const options = [
        { key: 'user', text: username, value:username },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out', as: Link, to: '/logout' },
    ]
    const userNotOptions = [
        { key: 'group', text: 'Login', as: Link, to: '/login' },
        { key: 'group', text: 'Signup', as: Link, to: '/Signup' }
     ]

    return (
        <div className="header">
            <Menu borderless inverted style={{ paddingRight:'40vh', paddingLeft:'40vh'}}>
                <img src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg" alt="" />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={handleItemClick}
                    >
                        <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" style={{ borderRadius:'30px', width:'3vh', marginRight:'20px'}} alt="" />
                        {user ? (
                            <Dropdown
                                inline
                                options={options}
                                defaultValue={options[0].value}
                            />):(<Dropdown
                                inline
                                options={userNotOptions}
                                defaultValue={userNotOptions[0].value}
                            />)}
                            
                    </Menu.Item>
                 </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header
