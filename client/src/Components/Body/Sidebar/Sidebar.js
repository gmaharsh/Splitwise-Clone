import React from 'react';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__upper">
                <div className="sidebar__upper__items">
                    <span>
                        <img src="https://lh3.googleusercontent.com/proxy/lmjMapv6W62KO-tm9HqQuUz84BnTtE8EulZ_lXTsePR2LGFFHmaeeMEEY4u-qjLkC7o--IVFde7KOLEwUhkYr20AaS4VsGbZ-gN-exnp-5zxeTYmud8" alt="" />
                    </span>
                    <h3>Dashboard</h3>
                </div>
                <div className="sidebar__upper__items">
                    <span>
                        <i class="flag outline icon"></i>
                    </span>
                    <h3>Recent Items</h3>
                </div>
                <div className="sidebar__upper__items sidebar__upper__items__iput">
                    <span>
                        <i class="search icon" style={{ backgroundColor:"#eeeeee"}}></i>
                    </span>
                    
                    <input type="text" placeholder="Filter By Name"/>
                </div>
                <div className="sidebar__upper__items">
                    <span>
                        <i class="list icon"></i>
                    </span>
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
                    <span>
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

export default Sidebar;
