import React from 'react'
import {Segment} from 'semantic-ui-react'

import ConnectWithUs from './connectWithUs'
import NewsletterSignup from './newsletterSignup'

function signup()
{
    return (
        <>
        
        <Segment.Group horizontal>
        <Segment>
        <NewsletterSignup />
        </Segment>
        <Segment floated='right' >
        <ConnectWithUs />
        </Segment>
        </Segment.Group>
        
        
        
        </>
        
    )
}
export default signup