import { useState,useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Notification from './Components/Notification'  
import personService from './services/person'
const App = () => {
   const [persons, setPersons] = useState([]) 
   const [newName, setNewName] = useState('')
   const [newNumber,setNewNumber]=useState('')
   const [search,setSearch]=useState('')
   const [message,setMessage]=useState({content:'yahoo',status:null})

const handleChangeName=(event)=>setNewName(event.target.value)
const handleChangeNumber=(event)=>setNewNumber(event.target.value)
const handlesearch=(event)=>{
  setSearch(event.target.value)
}

const displayperson=search==''?persons:persons.filter((person)=>person.name.toLowerCase().includes(search.toLowerCase()))
  
const hook=()=>{
  personService.getAll()
    .then((response)=>{
      setMessage({content:'Data fetched successfully',status:true})
      setTimeout(()=>{
        setMessage({content:null,status:null})
      },5000)
      setPersons(response.data)
    }).catch(()=>{
      Notification
      setMessage({content:'Error: could not fetch data from server',status:false})
      setTimeout(()=>{
        setMessage({content:null,status:null})
      },5000)
    })
    
}
useEffect(hook,[]);

const update=(person,newcontact)=>{
      const confirmed=confirm(`${person.name} already exist,you wanne replace the old number with the new one ?`)
      if(confirmed){
    

         personService.update(person.id,newcontact).
         then(response=>{  
          setMessage({content:`${person.name} has been updated successfully`,status:true})
          setTimeout(()=>{
        setMessage({content:null,status:null})
      },5000) 
          setPersons(persons.map(person=>person.id===response.data.id? response.data:person))
         }).catch(()=>{
          setMessage({content:`Error: ${person.name} has already been removed from server`,status:false})
          setTimeout(()=>{
        setMessage({content:null,status:null})
      },5000)
          setPersons(persons.filter(person=>person.id!=person.id))
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
     setMessage({content:`${newName} has been added successfully`,status:true})
      setTimeout(()=>{
          setMessage({content:null,status:null})
        },5000)
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
      <Notification message={message.content} status={message.status} /> 
       <Filter search={search} handlesearch={handlesearch} />
      <h2> add a new</h2>
     <PersonForm addContact={addContact} newName={newName} newNumber={newNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h2>Numbers</h2>
        <Persons deletePerson={deletePerson} displayperson={displayperson} />
    </div>
  )
}

export default App