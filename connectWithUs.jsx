import React from 'react'
import {Icon,  Header} from 'semantic-ui-react'
import './icons.css'

function connectWithUs()
{
    return (
        <Header className='head' as="h2" block>
            Connect with Us
            <Icon className='icon' name='facebook' size='mini' />
            <Icon className='icon' name='twitter' size='mini' />
            <Icon className='icon' name='instagram' size='mini' />
            
        </Header>
    )
}
export default connectWithUs