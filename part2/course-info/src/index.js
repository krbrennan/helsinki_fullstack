import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Course from './components/Course'

const Total = ({ course }) => {
  return(
    course.parts.exercises
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const allCourses = courses.map((singleCourse) => {
    return <Course course={singleCourse} />
  })

  return allCourses
}

ReactDOM.render(<App />, document.getElementById('root'))