import React, { useState } from 'react';
import { Button, Dropdown, Header, Image, Modal } from 'semantic-ui-react';
import Card from './Card/Card';
import './Dashboard.css';

function Dashboard() {

    const [open, setOpen] = useState(false);

    const addExpense = () => {
        setOpen(false)
    }

    const friendOptions = [
        {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess',
            image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
        },
        {
            key: 'Elliot Fu',
            text: 'Elliot Fu',
            value: 'Elliot Fu',
            image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
        },
        {
            key: 'Stevie Feliciano',
            text: 'Stevie Feliciano',
            value: 'Stevie Feliciano',
            image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
        },
    ]
    

    return (
        <div className="dashboard">
            <div className="dashboard__heading">
                <h2>Dashboard</h2>
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
                            />
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
                                onClick={addExpense}
                                positive
                            />
                    </Modal.Actions>
                    </Modal>
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
                        <Card name="Rachana" amount="7010" owe="false" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
