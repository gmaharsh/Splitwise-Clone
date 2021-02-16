import React from 'react';
import './Card.css';

function Card({ name, amount, owe }) {
    // console.log("Name:-", name)
    return (
        <div className="card">  
            <img
                class="ui avatar image"
                src="https://www.pngkey.com/png/detail/448-4483798_download-icon-user-png-clipart-computer-icons-user.png"
                alt=""
            />
            <div className="card__details">
                <h4>{name}</h4>
                {owe ? (<span style={{color: '#ff652f'}}><p>you owe ${amount}</p></span>) : (<span style={{color: '#5bc5a7'}}><p>owes you ${amount}</p></span>)}
            </div>
        </div>
    )
}

export default Card
