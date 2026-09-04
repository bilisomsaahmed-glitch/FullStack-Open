const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Part=(props)=>{
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
      {  part:'Fundamentals of React',
         exercises:10},
      {part:'Using props to pass data',
       exercises: 7},
      {part :'State of a component',
       exercises :14}
]}

  return (
    <div>
      <Header course={course.name} />

      <Content
        part1={course.parts[0].part}
        exercises1={course.parts[0].exercises}
        part2={course.parts[1].part}
        exercises2={course.parts[1].exercises}
        part3={course.parts[2].part}
        exercises3={course.parts[2].exercises}
      />

      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  )
}

export default App

