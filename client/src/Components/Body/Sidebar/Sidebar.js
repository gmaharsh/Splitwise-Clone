import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__upper">
                <div className="sidebar__upper__items">
                    <img src="https://www.splitwise.com/assets/press/logos/bg-primary.svg" alt="" />
                    <h3>Dashboard</h3>
                </div>
                <div className="sidebar__upper__items">
                    <i className="flag outline icon"></i>
                    <h3>Recent Activity</h3>
                </div>
                {/* <div className="sidebar__upper__items sidebar__upper__items__input ">
                    <i className="search icon"></i>
                    <input type="text"/>
                </div> */}
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
                <div className="sidebar__items">
                    <i class="tag icon"></i>
                    <h3>Home</h3>
                </div>
                <div className="sidebar__items">
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
                <div className="sidebar__items">
                    <i class="user icon"></i>
                    <h3>Elon Musk</h3>
                </div>
                <div className="sidebar__items">
                    <i class="user icon"></i>
                    <h3>Mark</h3>
                </div>
                <div className="sidebar__items">
                    <i class="user icon"></i>
                    <h3>Sundar Pichai</h3>
                </div>
                <div className="sidebar__items">
                    <i class="user icon"></i>
                    <h3>Mary Barra</h3>
                </div>
                <div className="sidebar__items">
                    <i class="user icon"></i>
                    <h3>Jack Ma</h3>
                </div>
                <div className="sidebar__items">
                    <i class="user icon"></i>
                    <h3>Susan Wojcicki</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
