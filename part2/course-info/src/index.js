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
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }



  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))