import React from 'react';
import './Card.css';

function Card({ name, amount, owe }) {
    // console.log("Name:-", name)
    return (
        <div className="card">
            {owe ? (
                <div className="card">
                    <img
                        class="ui avatar image"
                        src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-teal22-100px.png"
                        alt=""
                    />
                    <div className="card__details">
                        <h4>{name}</h4>
                        {owe ? (<span style={{color: '#ff652f'}}><p>you owe ${amount}</p></span>) : (<span style={{color: '#5bc5a7'}}><p>owes you ${amount}</p></span>)}
                    </div>
                </div>
            ): (
                <div className="card">
                    <img
                        class="ui avatar image"
                        src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-orange22-100px.png"
                        alt=""
                    />
                    <div className="card__details">
                        <h4>{name}</h4>
                        {owe ? (<span style={{color: '#ff652f'}}><p>you owe ${amount}</p></span>) : (<span style={{color: '#5bc5a7'}}><p>owes you ${amount}</p></span>)}
                    </div>  
                </div>
            )}
        </div>
    )
}

export default Card
