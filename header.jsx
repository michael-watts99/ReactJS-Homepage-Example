import React from 'react'
import {Header} from 'semantic-ui-react'
import './header.css'
function heading(props)
{
    return (
        // props.alignment is the value of text-align CSS set by a CSS class found in header.css
        <div class={props.alignment}>
        <Header as='h1' dividing >
            {props.title}

        </Header>
        </div>
    )
}
export default heading