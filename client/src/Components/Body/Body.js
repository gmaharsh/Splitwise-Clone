import React from 'react'
import Ads from './Ads/Ads';
import './Body.css';
import Dashboard from './Dashboard/Dashboard'
import Sidebar from './Sidebar/Sidebar'

function Body() {
    return (
        <div className="body">
            <Sidebar />
            <Dashboard />
            <Ads />
        </div>
    )
}

export default Body
