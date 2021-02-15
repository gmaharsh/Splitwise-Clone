import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import Login from '../Authentication/Login/Login';
import Ads from './Ads/Ads';
import './Body.css';
import Dashboard from './Dashboard/Dashboard'
import Sidebar from './Sidebar/Sidebar'

function Body() {
    const user = useContext(AuthContext)
    // console.log(user.user)
    return (
        <div className="body">
            {user.user ? (
                <>
                    <Sidebar />
                    <Dashboard />
                    <Ads />
                </>
            ):(
                <Login  />
            )}
            
        </div>
    )
}

export default Body
