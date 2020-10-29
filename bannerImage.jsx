import React from 'react'
import {Image} from 'semantic-ui-react'



function bannerImage(props)
{
    return (
        <Image  height="500px" width="100%" src={props.image} />
    )
    
}
export default bannerImage