import React from 'react'
import {Card, Image} from 'semantic-ui-react'

function requesterCard(props)
{
    return (
        <div className="cardColumn">

        
        <Card>
            <Image src= {props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
      
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
    
        </Card>
        
        
        </div>
    )
}
export default requesterCard