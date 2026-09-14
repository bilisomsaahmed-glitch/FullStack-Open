const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Part=({name,exercises})=>{
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part)=><Part key={part.id} name={part.name} exercises={part.exercises} />)}      
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <p>
     <b>total of {parts.reduce((total,part) => total+part.exercises,0)} exercises</b> 
    </p>
  )
}


const Course=({course})=>{
return (
    <>
    <Header course={course.name} />

      <Content parts={course.parts}   />

      <Total parts={ course.parts} />
    </>
  )
}
export default Course;