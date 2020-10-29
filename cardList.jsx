import React from 'react'

import requesterListRowOne from './requesterList'
import RequesterCard from './requesterCard'
import './card.css'
function cardComponent(requester)
{
    return (
        
        <RequesterCard key= {requester.key} image = {requester.image} name= {requester.name} description = {requester.description}/>
       
        
        
    )
}


function cardList()
{
    return (
        <>
    
        
        <div className="cardRow">
        {requesterListRowOne.map(cardComponent)}
        </div>
        
        
        
        
        </>
    )
}
export default cardList