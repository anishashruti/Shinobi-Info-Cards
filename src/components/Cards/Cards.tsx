import React from "react"
import "./Cards.css"
interface shinobiCard{
    id?: string;
    images?: string;
    name: string;
    onClickCard: (name: string) => void;
}

const Cards = ({id,images,name,onClickCard}: shinobiCard) => {
    //const img = require({images})
    return (
        <div onClick={() => onClickCard(name)} className="card-container">
            <img className="shinobiImg" alt={name} src={images} />
            <p>{ id} {name}</p>
         </div>  
    );

}
export default Cards;
