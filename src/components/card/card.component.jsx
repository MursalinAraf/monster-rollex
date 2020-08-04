import React from 'react'
import './card.style.css'

function Card(props) {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
           <h2>{props.monster.name}</h2> 
            <h5>{props.monster.email}</h5>
        </div>
   )
}

export default Card
