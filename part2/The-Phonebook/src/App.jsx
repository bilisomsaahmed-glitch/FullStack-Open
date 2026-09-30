import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [search,setSearch]=useState('')

const addContact=(event)=>{
  if(persons.some(person=>person.name==newName)){
    alert(`${newName} already exist`)
    return;
  }
  event.preventDefault();
  const newnumbers={
    name:newName ,
    number:newNumber,
     id:persons.length+1
  }
  setPersons([...persons,newnumbers]);
  setNewName('');
}

const handleChangeName=(event)=>setNewName(event.target.value)
const handleChangeNumber=(event)=>setNewNumber(event.target.value)
const handlesearch=(event)=>{
  setSearch(event.target.value)
}

const displayperson=search==''?persons:persons.filter((person)=>person.name.toLowerCase().includes(search.toLowerCase()))
  
const hook=()=>{
  axios.get('http://localhost:3001/persons')
    .then((response)=>{
      console.log('persons',response.data)
      setPersons(response.data)
    })
    
}
useEffect(hook,[]);

return (
    <div>
      <h2>Phonebook</h2>
       <Filter search={search} handlesearch={handlesearch} />
      <h2> add a new</h2>
     <PersonForm addContact={addContact} newName={newName} newNumber={newNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h2>Numbers</h2>
        <Persons displayperson={displayperson} />
    </div>
  )
}

export default App