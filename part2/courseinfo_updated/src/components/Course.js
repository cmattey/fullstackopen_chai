import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
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

export default Course
