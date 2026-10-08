import { useState,useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import personService from './services/person'
const App = () => {
   const [persons, setPersons] = useState([]) 
   const [newName, setNewName] = useState('')
   const [newNumber,setNewNumber]=useState('')
   const [search,setSearch]=useState('')

const handleChangeName=(event)=>setNewName(event.target.value)
const handleChangeNumber=(event)=>setNewNumber(event.target.value)
const handlesearch=(event)=>{
  setSearch(event.target.value)
}

const displayperson=search==''?persons:persons.filter((person)=>person.name.toLowerCase().includes(search.toLowerCase()))
  
const hook=()=>{
  personService.getAll()
    .then((response)=>{
    
      setPersons(response.data)
    })
    
}
useEffect(hook,[]);

const update=(person,newcontact)=>{
      const confirmed=confirm(`${person.name} already exist,you wanne replace the old number with the new one ?`)
      if(confirmed){
    

         personService.update(person.id,newcontact).
         then(response=>{
         
          setPersons(persons.map(person=>person.id===response.data.id? response.data:person))
         })
          setNewName('');
          setNewNumber('')
      }
        
  }



const addContact=(event)=>{
    
     event.preventDefault();
     const newcontact={
     name:newName ,
     number:newNumber,
  }
 
   const person=persons.find(person=>person.name==newName)
     if((person)){
      update(person,newcontact);
      return;
     }
     personService.create(newcontact).
     then(response=>
     setPersons(persons.concat(response.data)))
     setNewName('');
     setNewNumber('')
}

const deletePerson=(id,name)=>{
 const confirmed= confirm(`Delete ${name}?`)
 if(confirmed){
     personService.remove(id)
    setPersons(persons.filter(person=>person.id!=id))
}
 }

return (
    <div>
      <h2>Phonebook</h2>
       <Filter search={search} handlesearch={handlesearch} />
      <h2> add a new</h2>
     <PersonForm addContact={addContact} newName={newName} newNumber={newNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h2>Numbers</h2>
        <Persons deletePerson={deletePerson} displayperson={displayperson} />
    </div>
  )
}

export default App