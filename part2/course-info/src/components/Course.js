import React from 'react';


const Total = ({ course }) => {
    let total = course.reduce((acc, val) => {
        return acc + val.exercises
    }, 0)

    return(
        <h3>total of { total } exercises</h3>
    )
  }

  const Header = (props) => {
      return(
          <h1>{props.courseObj.course.name}</h1>
      )
  }

  const CourseInfo = (props) => {
    return(
        <p>{props.info.name} {props.info.exercises}</p>
    )
  }


const Course = (props) => {
    return(
        <div>
            <Header courseObj={props}/>
                {props.course.parts.map((part) => {
                   return <CourseInfo info={part} /> 
            })}
            <Total course={props.course.parts} />
        </div>
    )
}

export default Course