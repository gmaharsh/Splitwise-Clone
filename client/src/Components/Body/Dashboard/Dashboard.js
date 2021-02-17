import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Icon, Input, MenuItem, Modal, Popup, Select } from 'semantic-ui-react';
import { AuthContext } from '../../../context/auth';
import { FETCH_USERS_QUERY } from '../../../utils/graphql';
import { FETCH_POSTS_QUERY } from '../../../utils/graphql';
import Card from './Card/Card';
import './Dashboard.css';
function Dashboard() {
    

    const user = useContext(AuthContext)
    console.log("User", user);
    const [borrow, setBorrow] = useState("");
    const [owe, setOwe] = useState([])
    const [owed, setOwed] = useState([])
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [thirdOpen, setThirdOpen] = useState(false)
    const [errors, setErrors] = useState({});
    const [friends, setFriends] = useState([]);

    const [values, setValues] = useState({
        body: "",
        amount: "",
        username: ""
    });

    const changeValues = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }


    const { loading, data: users } = useQuery(FETCH_USERS_QUERY); 

    const { data: posts } = useQuery(FETCH_POSTS_QUERY, { 
        variables: { 
            username: "Maharsh"
        },
        update(_, result) {
            console.log("results from post query", result)
        }
    })

    // console.log("Posts", posts)



    useEffect(() => {
        if (posts) {
            posts.getAccountDetails.map(account => {
                console.log("Account Checking", account)
                if (account.user1 === user.user.username) {
                    let AccountDetails = {
                        friendName: account.user2,
                        amount: account.user1OweCount
                    }
                    if (account.user1OweCount > 0) {
                        setOwed(prevState => [...prevState, {AccountDetails}])
                    } else {
                        setOwe(prevState => [...prevState, {AccountDetails}])
                    }
                }
                if (account.user2 == user.user.username) {
                    let AccountDetails = {
                        friendName: account.user1,
                        amount: account.user2OweCount
                    }
                    if (account.user2OweCount > 0) {
                        setOwed(prevState => [...prevState, {AccountDetails}])
                    } else {
                        setOwe(prevState => [...prevState, {AccountDetails}])
                    }
                }
            })
        }
    }, [posts])

    useEffect(() => {
        if (users) {
            users.getUsers.map(friends => {
                if (friends.username != "Maharsh") {
                    // console.log("Dashboard for friends", friends)
                    setFriends(prevState => [...prevState, friends.username])
                }})
        }
    },[users])

    console.log("Owe", owe)

    const submitForm = (e) => {
        e.preventDefault();
        setFirstOpen(false)
        console.log("Values", values)
        addBills();
    }

    
    const [addBills, { error }] = useMutation(ADD_TRANSACTION, {
        variables: values,
        update(proxy, result) {
            console.log(result.data)
            const data = proxy.readQuery({ query: FETCH_POSTS_QUERY })
            console.log("Reading through Proxy:-", data)
            const newData = [result.data, data]
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: {
                    posts: [...data.posts, result.data],
                },
                });


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
                                        <input
                                            list='people'
                                            // name={values.username}
                                            // value={values.username}
                                            placeholder='Choose a friend...'
                                            onChange={(e) => setValues({username:e.target.value})}
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
                                    You Paid Harshit
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
                    <p>+ $2564.00</p>
                </div>
                <div className="dashboard__insight" style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', lineHeight: '1px'}}>
                    <h4>you owe</h4>
                    <p>$30.0</p>
                </div>
                <div className="dashboard__insight">
                    <h4>you owed</h4>
                    <p>+ $2594.00</p>
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





export default Dashboard
