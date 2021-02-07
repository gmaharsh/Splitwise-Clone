import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__heading">
                <h2>Dashboard</h2>
                <div className="dashboard__buttons">
                    <button class="medium ui orange button">
                        Add an Expense
                    </button>
                    <button class="medium ui teal button">
                        Settle up
                    </button>
                </div>
            </div>
            <div className="dashboard__insights">
                <div className="dashboard__insight">
                    <h4>total balances</h4>
                    <p>+ $241.46</p>
                </div>
                <div className="dashboard__insight" style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>
                    <h4>you owe</h4>
                    <p>+ $0.0</p>
                </div>
                <div className="dashboard__insight">
                    <h4>you owed</h4>
                    <p>$241.46</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
