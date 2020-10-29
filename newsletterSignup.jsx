import React from 'react'
import {Input, Header, Button} from 'semantic-ui-react'
import './signup.css'

function newsletterSignup()
{
    return (
        <Header as="h2" block>
            Newsletter
            
            <Input  className="input" type="email" size='mini' placeholder='Email' />
            <Button >Subscribe</Button>
            
        </Header>
    )
}
export default newsletterSignup