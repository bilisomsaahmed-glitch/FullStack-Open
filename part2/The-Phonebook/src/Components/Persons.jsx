const Persons=({displayperson})=>{
return(
  <div>
  {displayperson.map((person)=><p key={person.id}>{person.name} {person.number}</p>)}
  </div>
) 
}

export default Persons;