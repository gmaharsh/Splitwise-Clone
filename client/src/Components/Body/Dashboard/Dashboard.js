import React from 'react';
import Card from './Card/Card';
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
                <div className="dashboard__insight" style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', lineHeight: '1px'}}>
                    <h4>you owe</h4>
                    <p>+ $0.0</p>
                </div>
                <div className="dashboard__insight">
                    <h4>you owed</h4>
                    <p>$241.46</p>
                </div>
            </div>
            <div className="dashboard__body">
                <div className="body__headings">
                    <h3>YOU OWE</h3>
                    <div className="body__headings__buttons">
                        <button class="small ui button">
                            <i class="list icon"></i>
                            view as list
                        </button>
                        <button class="small ui basic button">
                            <i class="chart bar outline icon"></i>
                            view chart
                        </button>
                    </div>
                    <h3>YOU ARE OWED</h3>
                </div>
                <div className="dashboard__accounts">
                    <div className="dashboard__owe">
                        <Card name="Pragya Agarwal" amount="500" owe="true" />
                    </div>
                    <div className="dashboard__owed">
                        <Card name="Harshit" amount="700" owe="false" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
