import React from 'react';
import './Card.css';

function Card({ name, amount, owe }) {
    // console.log("Name:-", name)
    return (
        <div className="card">  
            <img
                class="ui avatar image"
                src="https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg"
                alt=""
            />
            <div className="card__details">
                <h4>{name}</h4>
                {owe ? (<p>you owe ${amount}</p>) : (<p>owes you ${amount}</p>)}
            </div>
        </div>
    )
}

export default Card
