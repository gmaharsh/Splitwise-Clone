import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { Button, Dropdown, MenuItem, Modal, Select } from 'semantic-ui-react';
import { FETCH_USERS_QUERY } from '../../../utils/graphql';
import Card from './Card/Card';
import './Dashboard.css';

function Dashboard() {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [search, setSearch] = useState("");
    const [userData, setUserData] = useState("");

    const { loading, data} = useQuery(FETCH_USERS_QUERY)
    const addBills = () => {
        console.log(name)
        setOpen(false)
    }

    const friendOptions = [ ]

    return (
        <div className="dashboard">
            <div className="dashboard__heading">
                <h3>Dashboard</h3>
                <div className="dashboard__buttons">
                    <Modal
                        size='tiny'
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button class="medium ui orange button">
                        Add an Expense
                    </button>}
                    >
                    <Modal.Header>Add an Expense</Modal.Header>
                    <Modal.Content className="model__content">
                            With you and :
                             <input
                                placeholder="Enter your friend's name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            {userData &&
                                        <Select
                                            
                                            onChange={(e) => setSearch(e.target.value)}
                                        >
                                            {userData && userData.map((option) => (
                                            <MenuItem
                                                key={option._id}
                                                value={option._id}
                                            >
                                                {option.name}
                                            </MenuItem>
                                    ))}
                                        </Select>
                                    }
                    </Modal.Content>
                    <hr />
                    <Modal.Content className="model__contentdescription divider">
                            <input
                                placeholder="Enter a description"
                            />
                            <input
                                placeholder="Enter a amount"
                            />
                    </Modal.Content>
                    <Modal.Content className="model__contentbuttons">
                            Paid by 
                            <Dropdown
                                text='Add user'
                                labeled
                                button
                                className='icon'
                                style={{ marginLeft: '10px' }}
                            >
                                <Dropdown.Menu>
                                <Dropdown.Header content='People You Might Know' />
                                {friendOptions.map((option) => (
                                    <Dropdown.Item key={option.value} {...option} />
                                ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            and split
                            <Dropdown
                                text='Add user'
                                labeled
                                button
                                className='icon'
                                style={{ marginLeft: '10px' }}
                            >
                                <Dropdown.Menu>
                                <Dropdown.Header content='People You Might Know' />
                                {friendOptions.map((option) => (
                                    <Dropdown.Item key={option.value} {...option} />
                                ))}
                                </Dropdown.Menu>
                            </Dropdown>
                    </Modal.Content>    
                    <Modal.Actions>
                            <Button
                                color='black'
                                onClick={() => setOpen(false)}>
                            Cancel
                            </Button>
                            <Button
                                content="Save"
                                onClick={addBills}
                                positive
                            />
                    </Modal.Actions>
                    </Modal>
                    <button className="tiny ui olive button" >Settle Up</button>
                </div>
            </div>
            <div className="dashboard__insights">
                <div className="dashboard__insight">
                    <h4>total balances</h4>
                    <p>+$241.46</p>
                </div>
                <div className="dashboard__insight" style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', lineHeight: '1px'}}>
                    <h4>you owe</h4>
                    <p>+ $0.0</p>
                </div>
                <div className="dashboard__insight">
                    <h4>you owed</h4>
                    <p>+$241.46</p>
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
                        <Card name="Pragya Agarwal" amount="500" owe={true} />
                    </div>
                    <div className="dashboard__owed">
                        <Card name="Harshit" amount="700" owe={false} />
                        <Card name="Rachana" amount="7010" owe={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Dashboard
