import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dropdown, Form, Icon, Input, MenuItem, Modal, Popup, Select } from 'semantic-ui-react';
import { AuthContext } from '../../../context/auth';
import { FETCH_USERS_QUERY } from '../../../utils/graphql';
import { FETCH_POSTS_QUERY } from '../../../utils/graphql';
import Accounts from './Accounts/Accounts';
// import { SETTLE_UP } from '../../../utils/graphql';
import Card from './Card/Card';
import Charts from './Charts/Charts';
import './Dashboard.css';
function Dashboard({props}) {
    

    const user = useContext(AuthContext)
    const [owe, setOwe] = useState([])
    const [owed, setOwed] = useState([])
    const [counter, setCounter] = useState([])
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [thirdOpen, setThirdOpen] = useState(false)
    const [errors, setErrors] = useState({});
    const [friends, setFriends] = useState([]);
    const [settleUpName, setsettleUpName] = useState([]);
    let amountOwed = 0;
    let amountOwe = 0;

    const [settleUpvalues, setsettleUpValues] = useState({
        amount: "",
        postId: "",
    });

    const [values, setValues] = useState({
        body: "",
        amount: "",
        username: ""
    });

    const changeValues = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const changeValuessettleUp = (e) => {
        setsettleUpValues({...settleUpvalues, [e.target.name]:e.target.value})
    }

    const { loading, data: users } = useQuery(FETCH_USERS_QUERY); 

    

    useEffect(() => {
        if (users) {
            users.getUsers.map(friends => {
                if (friends.username != "Maharsh") {
                    setFriends(prevState => [...prevState, friends.username])
                }})
        }
        
    },[users])

    const settleUp = () => {
        // console.log("I am clicked")
        owe.map(o => {
            console.log(o.AccountDetails.id)
            setsettleUpValues({
                postId:o.AccountDetails.id,
                amount: (-o.AccountDetails.amount),
            })
            setsettleUpName(o.AccountDetails.friendName)
        })
        // console.log(settleUpvalues)
    }

    
    const submitsettleUpForm = (e) => {
        e.preventDefault();
        setSecondOpen(false)
        setThirdOpen(false)
        // console.log("settleUpvalues after submitting", settleUpvalues)
        settleUpAmount();
    }

    

    const { data } = useQuery(FETCH_POSTS_QUERY, { 
        variables: { 
            username: user.user.username
        },
        update(_, result) {
            // console.log("results from post query", result)
        }
    })

    
    // console.log("Data before UseEffect Block", data)
    console.log(counter)
    useEffect(() => {
        // console.log("Data Passed in useEffect", data)
        setOwe([])
        setOwed([])
        if (data) {
            data.getAccountDetails.map(account => {
                // console.log("Account Checking", account)
                if (account.user1 === user.user.username) {
                    let AccountDetails = {
                        id: account._id,
                        friendName: account.user2,
                        amount: account.user1OweCount
                    }
                    if (account.user1OweCount > 0) {
                        // setOwedAmount([...owedAmount, account.amountOwe])
                        setOwed(prevState => [...prevState, {AccountDetails}])
                    } else {
                        console.log(account.user1OweCount)
                        // setOweAmount([...owedAmount, account.amountOwe])
                        setOwe(prevState => [...prevState, {AccountDetails}])
                    }
                }
                if (account.user2 == user.user.username) {
                    let AccountDetails = {
                        id: account._id,
                        friendName: account.user1,
                        amount: -account.user1OweCount
                    }
                    if (account.user2OweCount > 0) {
                        // setOwedAmount([...owedAmount, account.amountOwe])
                        setOwed(prevState => [...prevState, {AccountDetails}])
                    } else {
                        // console.log(account.user2OweCount)
                        // setOweAmount([...owedAmount, account.amountOwe])
                        setOwe(prevState => [...prevState, {AccountDetails}])
                    }
                }
            })
        }
    },[data, counter])

    

    const submitForm = (e) => {
        e.preventDefault();
        setFirstOpen(false)
        addBills();
    }

    const [addBills, { error }] = useMutation(ADD_TRANSACTION, {
        variables: values,
        update(proxy, result) {
            console.log(result.data.addAmount)
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY,
                variables: {
                    username: user.user.username
                }
            });
            console.log(data)
            data && data.getAccountDetails.map(d => {
                if (result.data.addAmount.user1 === d.user1) {
                    if (result.data.addAmount.user2 === d.user2) {
                        d.amountOwe = [result.data.addAmount.amountOwe[0], ...d.amountOwe]
                        d.user1OweCount = result.data.addAmount.user1OweCount;
                        d.user2OweCount = result.data.addAmount.user2OweCount;
                        proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
                        setCounter(counter + 1)
                    } else {
                        
                    }
                }
            })
            
            // console.log("Changed Data", data)
            values.body = '';
            values.amount = '';
            values.username = '';
        }, onError(err) {
            setErrors(err && err.graphQLErrors[0] ? err.graphQLErrors[0].extensions.exception.errors : {});
        }
    });

    const [settleUpAmount] = useMutation(SETTLE_UP, {
        variables:settleUpvalues,
        update(proxy, result) {
            console.log(result.data.settleUpAmount)
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY,
                variables: {
                    username: user.user.username
                }
            });
            console.log(data)
            data && data.getAccountDetails.map(d => {
                // console.log(result.data.settleUpAmount.user1)
                // console.log(result.data.settleUpAmount.user2)
                
                if (result.data.settleUpAmount.user1 === d.user1) {
                    if (result.data.settleUpAmount.user2 === d.user2) {
                        // console.log(d.user1)
                        // console.log(d.user2)
                        d.user1OweCount = result.data.settleUpAmount.user1OweCount;
                        d.user2OweCount = result.data.settleUpAmount.user2OweCount;
                        proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
                        setCounter(counter + 1)
                        // 
                    }
                }
            })
            
            console.log("Changed Data", data)

            settleUpvalues.amount = "";
            settleUpvalues.postId = "";

        }
    });

    const submitPayment = () => {
        setSecondOpen(false)
        setThirdOpen(false)
    }

    
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
                                        <input
                                            list='people'
                                            // name={values.username}
                                            // value={values.username}
                                            placeholder='Choose a friend...'
                                            onChange={(e) => setValues({ username: e.target.value })}
                                            autocomplete="off"
                                        />
                                        <datalist
                                            id="people"
                                            // value={borrow}
                                        >
                                        {friends && friends.map(user => (
                                            <option key={user} value={user} />
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
                                            autocomplete="off"
                                        />
                                        <input
                                            placeholder="Enter an amount"
                                            name="amount"
                                            value={values.amount}
                                            onChange={changeValues}
                                            autocomplete="off"
                                        />
                                </Modal.Content>
                                <Modal.Content className="model__contentbuttons">
                                        Paid by <p>{owe &&  owe.AccountDetails}</p>
                                        <Dropdown
                                            text='Add user'
                                            labeled
                                            button
                                            className='icon'
                                            style={{ marginLeft: '10px' }}
                                        >
                                            <Dropdown.Menu>
                                            <Dropdown.Header content='People You Might Know' />
                                            {/* {friendOptions.map((option) => (
                                                <Dropdown.Item key={option.value} {...option} />
                                            ))} */}
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
                                                <Dropdown.Item  value="You Owe Full" />
                                            {/* {friendOptions.map((option) => (
                                                
                                            ))} */}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                </Modal.Content>    
                                <Modal.Actions>
                                        <Button
                                            color='black'
                                            onClick={() => setFirstOpen(false)}
                                            >
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
                            {/* Settle UP Modal Starts */}
                            <Modal
                                size="tiny"
                                onClose={() => setSecondOpen(false)}
                                onOpen={() => setSecondOpen(true)}
                                open={secondOpen}
                                onClick={settleUp}
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
                                as={Form}
                                onSubmit={submitsettleUpForm}
                                onClose={() => setThirdOpen(false)}
                                open={thirdOpen}
                                size='small'
                            >
                                <Modal.Header>Settle Up the Payment</Modal.Header>
                                
                                <Modal.Content className="model__contentdescription divider" style={{ textAlign: 'center' }} >
                                    You Paid {settleUpName}
                                </Modal.Content>
                                <Modal.Content className="model__contentdescription" style={{ display: 'flex', flexDirection: 'column', paddingTop:'20px'}}>
                                   <input
                                        placeholder="Enter an amount"
                                        name="amount"
                                        value={settleUpvalues.amount}
                                        onChange={changeValuessettleUp}
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
                                        onClick={submitsettleUpForm}
                                        positive
                                        type='submit'
                                    />
                                </Modal.Actions>
                            </Modal>
                        </>
                    )}
                </div>
            </div>
            <div className="dashboard__insights">
                <div className="dashboard__insight">
                    {owed && owed.map(o => {
                        amountOwed += o.AccountDetails.amount;
                    })}
                    {owe && owe.map(o => {
                        amountOwe += o.AccountDetails.amount;
                    })}
                    <h4>total balances</h4>
                    {}
                    <p>${amountOwed + amountOwe}</p>
                </div>
                <div className="dashboard__insight" style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', lineHeight: '1px'}}>
                    <h4>you owe</h4>
                    
                    <p>${(-amountOwe)}</p>
                </div>
                <div className="dashboard__insight">
                    <h4>you owed</h4>
                    
                    <p>${amountOwed}</p>
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
                       {owe && owe.map(account => (
                            // console.log(account.AccountDetails.friendName)
                            <Card name={account.AccountDetails.friendName} amount={-(account.AccountDetails.amount)} owe={true} />
                        ))}
                    </div>
                    <div className="dashboard__owed">
                        {owed && owed.map(account => (
                            // console.log(account.AccountDetails.friendName)
                            <Card name={account.AccountDetails.friendName} amount={account.AccountDetails.amount} owe={false} />
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
    addAmount(body:$body, amount:$amount, username:$username){
        user1
        user2
        amountOwe{
            body
            amount
            lenderName
            borrowerName
        }
        user1OweCount
        user2OweCount
        createdAt
    }
  }
`;
const SETTLE_UP = gql`
  mutation($postId: String!, $amount: String!) {
    settleUpAmount(postId: $postId, amount: $amount) {
      user1
      user2
      user1OweCount
      user2OweCount
      createdAt
    }
  }
`;





export default Dashboard
