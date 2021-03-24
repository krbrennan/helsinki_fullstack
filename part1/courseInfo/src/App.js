
const App = () => {
const course = 'Half Stack application development'

const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      {props.props.map((prop) => {
        return <p>{prop.name} {prop.exercises}</p>
    })}
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of Exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
  )
}

return (
  <div>
    <Header course={course} />
    <Content props={parts} />
    <Total props={parts} />
  </div>
)
}

export default App;
