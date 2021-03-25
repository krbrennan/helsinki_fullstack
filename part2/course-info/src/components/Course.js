import React, { useState }  from 'react';

const Course = (props) => {

    const style = {
        fontWeight:900
    }

    let total = 0

    console.log(props.course)
    return(
        <div>
            <h1>{ props.course.name }</h1>
                {props.course.parts.map((part) => {
                    total += part.exercises
                    return <p key={part.id}>{part.name} {part.exercises}</p>
            })}

            <p style={style}>total of { total } exercises</p>
        </div>
    )
}

export default Course