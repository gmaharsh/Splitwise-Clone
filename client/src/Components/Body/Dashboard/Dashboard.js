import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Icon, Input, MenuItem, Modal, Select } from 'semantic-ui-react';
import { AuthContext } from '../../../context/auth';
import { FETCH_USERS_QUERY } from '../../../utils/graphql';
import Card from './Card/Card';
import './Dashboard.css';

function Dashboard({props}) {

    const user = useContext(AuthContext)
    console.log(user.user.username)
    const [owe, setOwe] = useState([])
    const [owed, setOwed] = useState([])
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [thirdOpen, setThirdOpen] = useState(false)
    const[errors, setErrors] = useState({});
    
    const [values, setValues] = useState({
        body: "",
        amount: "",
        username: ""
    });

    const changeValues = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }


    const { loading, data: users } = useQuery(FETCH_USERS_QUERY);
    console.log("Users:-", users)

    const { data: posts } = useQuery(FETCH_POSTS_QUERY, { 
        variables: { 
            username: user.user.username
        }
    })

    console.log("Posts", posts)



    useEffect(() => {
        if (posts) {
            posts.getAccountDetails.map(account => {
                if (account.amountOweCount > 0) {
                    setOwed(prevState => [...prevState, {account}])
                } else {
                    setOwe(prevState => [...prevState, {account}])
                }
            })
        }
        // QueryMultiple();
    }, [posts])

    
    const [addBills, { error }] = useMutation(ADD_TRANSACTION, {
        variables: values,
        update(_, result) {
            console.log(result)
            values.body = '';
            values.amount = '';
            values.username = '';
        },onError(err) {
            setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
        }
    })

    const submitPayment = () => {
        setSecondOpen(false)
        setThirdOpen(false)
    }

    const submitForm = (e) => {
        e.preventDefault();

        setFirstOpen(false)
        addBills();
    }


    const friendOptions = [ ]

    return (
        <div className="dashboard">
            <div className="dashboard__heading">
                <h3>Dashboard</h3>
                <div className="dashboard__buttons">
                    {user.user && (
                        <> 
                            <button class="medium ui orange button" onClick={() => setFirstOpen(true)}>Add an Expense</button>
                            <button class="medium ui teal button" onClick={() => setSecondOpen(true)}>Settle Up</button>
                            <Modal
                                as={Form}
                                onSubmit={submitForm}
                                size="tiny"
                                onClose={() => setFirstOpen(false)}
                                onOpen={() => setFirstOpen(true)}
                                open={firstOpen}
                            >
                                <Modal.Header>Add an Expense</Modal.Header>
                                <Modal.Content className="model__content">
                                        With you and :
                                        <input list='people' placeholder='Choose a friend...' />
                                        <datalist id="people">
                                        {users && users.getUsers.map(user => (
                                            <option value={user.username}>{user.username}</option>
                                        ))}
                                        </datalist>
                                </Modal.Content>
                                <hr />
                                <Modal.Content className="model__contentdescription divider">
                                        <input
                                            placeholder="Enter a description"
                                            name="body"
                                            value={values.body}
                                            onChange={changeValues}
                                        />
                                        <input
                                            placeholder="Enter an amount"
                                            name="amount"
                                            value={values.amount}
                                            onChange={changeValues}
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
                                            onClick={() => setFirstOpen(false)}>
                                        Cancel
                                        </Button>
                                        <Button
                                            content="Save"
                                            type='submit'
                                            positive
                                        />
                                </Modal.Actions>
                                {Object.keys(errors).length > 0 && (
                                    <div className="ui error message">
                                    <ul className="list">
                                        {Object.values(errors).map((value) => (
                                        <li key={value}>{value}</li>
                                        ))}
                                    </ul>
                                    </div>
                                )}
                            </Modal>
                            <Modal
                                size="tiny"
                                onClose={() => setSecondOpen(false)}
                                onOpen={() => setSecondOpen(true)}
                                open={secondOpen}
                            >
                                <Modal.Header>Settle Up</Modal.Header>
                                
                                <Modal.Content className="model__contentdescription divider" style={{ textAlign: 'center' }} >
                                    Choose a payment method
                                </Modal.Content>
                                <Modal.Content className="model__contentbuttons" style={{ display: 'flex', flexDirection: 'column', paddingTop:'20px'}}>
                                    <Button color='green' onClick={() => setThirdOpen(true)} >Record a cash payment </Button>
                                    <Button style={{ margin: '20px 0' }}> <Icon name='paypal' /> Paypal</Button>
                                    Note: PayPal payments via debit or credit card incur fees of up to 4%. Venmo payments via credit card incur fees of 3%. Visit PayPal.com or Venmo.com for details.
                                </Modal.Content>    
                                <Modal.Actions>
                                    <Button
                                        color='black'
                                        onClick={() => setSecondOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button
                                        content="Save"
                                        onClick={() => setThirdOpen(true)} 
                                        // onClick={submitForm}
                                        positive
                                    />
                                </Modal.Actions>
                            </Modal>
                            <Modal
                                onClose={() => setThirdOpen(false)}
                                open={thirdOpen}
                                size='small'
                            >
                                <Modal.Header>Settle Up the Payment</Modal.Header>
                                
                                <Modal.Content className="model__contentdescription divider" style={{ textAlign: 'center' }} >
                                    You Paid pragya
                                </Modal.Content>
                                <Modal.Content className="model__contentdescription" style={{ display: 'flex', flexDirection: 'column', paddingTop:'20px'}}>
                                   <input
                                        placeholder="Enter an amount"
                                        name="amount"
                                        value={values.amount}
                                        onChange={changeValues}
                                    />
                                </Modal.Content>    
                                <Modal.Actions>
                                    <Button
                                        // icon='Cancel'
                                        content='Cancel'
                                        onClick={submitPayment}
                                    />
                                    <Button
                                        content="Save"
                                        // onClick={submitForm}
                                        positive
                                    />
                                </Modal.Actions>
                            </Modal>
                        </>
                    )}
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
                        {posts && owe.map(account => (
                            <Card name={account.account.borrowName} amount={account.account.amountOweCount} owe={true} />
                        ))}
                    </div>
                    <div className="dashboard__owed">
                        {posts && owed.map(account => (
                            <Card name={account.account.borrowName} amount={account.account.amountOweCount} owe={false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ADD_TRANSACTION = gql`
  mutation addAmount(
    $body:String!, 
    $amount:String!, 
    $username:String!
  ) {
    addAmount(
      body: $body,
      amount :$amount,
      username: $username
    ) {
        lenderName
        amountOwe{
            body
            amount
        }
        createdAt
    }
  }
`;

const FETCH_POSTS_QUERY = gql`
    query($username: String!){
        getAccountDetails(username: $username){
            borrowName
            amountOweCount
        }
    }
`;




export default Dashboard
