import React, { useState }  from 'react';

const Course = (props) => {

    const style = {
        listStyle:'none'
    }

    console.log(props.course.parts)
    return(
        <div>
            <h1>{ props.course.name }</h1>
                {props.course.parts.map((part) => {
                return <p key={part.id}>{part.name} {part.exercises}</p>
            })}
        </div>
    )
}

export default Course