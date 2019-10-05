import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = ({part}) => {
  console.log(part.name)
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  )
}

const Content = ({ content }) => {
  console.log("Content", content)
  return (
    content.map((part) =>
      <Part
      key={part.id}
      part={part}
      />
    )
  )
}

const Total = ({content}) => {

  const total = content.reduce((sum, part)=> sum+part.exercises, 0)

  return (
    <div>
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
}

const Course = ({course}) => {
  return(
  <div>
  <Header name = {course.name}/>
  <Content content = {course.parts}/>
  <Total content = {course.parts}/>
  </div>
  )
}

const App = () => {
  const course = {
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
