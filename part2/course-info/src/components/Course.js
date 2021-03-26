import React, { useState }  from 'react';


const Total = ({ course }) => {
    let total = course.reduce((acc, val) => {
        return acc + val.exercises
    }, 0)

    return(
        <h1>total of { total } exercises</h1>
    )
  }


const Course = (props) => {
    const style = {
        fontWeight:900
    }

    return(
        <div>
            <h1>{ props.course.name }</h1>
                {props.course.parts.map((part) => {
                    return <p key={part.id}>{part.name} {part.exercises}</p>
            })}
            <Total course={props.course.parts} />
        </div>
    )
}

export default Course