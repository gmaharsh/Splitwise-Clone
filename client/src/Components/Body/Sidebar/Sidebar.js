import { useQuery } from '@apollo/react-hooks';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/auth';
import { FETCH_USERS_QUERY } from '../../../utils/graphql';
import './Sidebar.css';

function Sidebar() {

    const { loading, data } = useQuery(FETCH_USERS_QUERY);
    const user = useContext(AuthContext)
    const [friends, setFriends] = useState([]);
    // useEffect(() => {
    //     console.log("Friends from Sidebar", data)
    // },[])
    useEffect(() => {
        if (data) {
            data.getUsers.map(friends => {
                if (friends.username != user.user.username) {
                    // setFriends(...friends, friends.username)
                    setFriends(prevState => [...prevState, friends.username])
                }})
        }
    },[data])
    

    console.log(friends)

    const [active, setActive] = useState(false)

    return (
        <div className="sidebar">
            <div className="sidebar__upper">
                <div className="sidebar__upper__items" style={{borderLeft: '5px solid #5bc5a7'}}>
                    <img src="https://www.splitwise.com/assets/press/logos/bg-primary.svg" alt="" />
                    <h3>Dashboard</h3>
                </div>
                <div className="sidebar__upper__items">
                    <i className="flag outline icon"></i>
                    <h3>Recent Activity</h3>
                </div>
                <div className="sidebar__upper__items sidebar__upper__items__input">
                    <i className="search icon"></i>
                    <input type="text" placeholder="Filter by name"/>
                </div>
                <div className="sidebar__upper__items">
                    <i className="list icon"></i>
                    <h3>All Expenses</h3>
                </div>
            </div>
            <div className="sidebar__middle">
                <div className="sidebar__headline">
                    <h4>GROUPS</h4>
                    <span>
                        <i class="plus icon"></i>
                        Add
                    </span>
                </div>
                <div className="sidebar__upper__items">
                    <i class="tag icon"></i>
                    <h3>Home</h3>
                </div>
                <div className="sidebar__upper__items">
                    <i class="tag icon"></i>
                    <h3>Friends</h3>
                </div>
            </div>
            <div className="sidebar__lower">
                <div className="sidebar__headline">
                    <h4>FRIENDS</h4>
                    <span style={{display: 'flex'}}>
                        <i class="plus icon"></i>
                        Add
                    </span>
                </div>
                {data && friends.map(user => (
                    <div className="sidebar__upper__items">
                        <i class="user icon"></i>
                        <h3>{user}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Sidebar
