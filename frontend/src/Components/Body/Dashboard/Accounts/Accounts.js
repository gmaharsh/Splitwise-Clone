import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/auth'
import Card from '../Card/Card'

function Accounts({ name, amount }) {

    const [owed, setOwed] = useState([])
    const [owe, setOwe] = useState([])

    useEffect(() => {
        if (amount > 0) {
            let AccountDetails = {
                name: name,
                amount: amount
            }
            setOwed([...owed, {AccountDetails}])
        } else {
            let AccountDetails = {
                name: name,
                amount: amount
            }
            setOwe([...owe, {AccountDetails}])
        }
    },[amount])
    
    console.log("Owed from Accounts", owed)

    console.log("Owed from Accounts", owed)
    return (
        <div className="accounts">
            {/* {amount > 0 ? (
                <div className="dashboard__owed">
                     <Card name={name} amount={amount} owe={false} />
                </div>
            ):(<div className="dashboard__owe">
                    <Card name={name} amount={-(amount)} owe={true} />
            </div>)} */}
            <div className="dashboard__owe">
                {/* {owe && owe.map(account => (
                    <Card name={account.AccountDetails.friendName} amount={-(account.AccountDetails.amount)} owe={true} />
                ))} */}
            </div>
            <div className="dashboard__owed">
                {/* {owed && owed.map(account => (
                     <Card name={account.AccountDetails.friendName} amount={account.AccountDetails.amount} owe={false} />
                ))} */}
            </div>
        </div>
    )
}

export default Accounts
