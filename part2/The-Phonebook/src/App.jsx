import { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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