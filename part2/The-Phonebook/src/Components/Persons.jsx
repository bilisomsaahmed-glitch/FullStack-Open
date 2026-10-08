
const Persons=({displayperson,deletePerson})=>{
return(
  <div>
  {displayperson.map((person)=>
    <p key={person.id}>{person.name} {person.number}
      <button onClick={()=>deletePerson(person.id,person.name)}>delete</button>
    </p>

)}
  
  </div>
) 
}

export default Persons;