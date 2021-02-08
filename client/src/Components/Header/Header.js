import React, { useState } from 'react';
import './Header.css';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



function Header() {

    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name)

    const options = [
        { key: 'user', text: 'Mahee',value:'Mahee' },
        { key: 'user', text: 'Create a group', as: Link, to: '/my-account' },
        { key: 'settings', text: 'Fairness Calculator' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
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
                        <img src="https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg" style={{ borderRadius:'30px', width:'3vh', marginRight:'20px'}} alt="" />
                            <Dropdown
                                inline
                                options={options}
                                defaultValue={options[0].value}
                            />
                    </Menu.Item>
                 </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header
