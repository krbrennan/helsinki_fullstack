import React from 'react'

const Person = (props) => {
    return(
        <p key={props.info.name}>{props.info.name}    {props.info.number} </p>
    )
}

export default Person