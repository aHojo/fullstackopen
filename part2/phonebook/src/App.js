import React, { useState, useEffect } from 'react'
import Form from './components/form';
import Filter from './components/filter';
import Person from './components/person';
import axios from 'axios';

function utilCheckIfNameExists(newName, persons) {
  let found = false;  
  persons.forEach(p => {
      if (p.name.toLowerCase() === newName.toLowerCase()) {
        found = true;
      }
    })

    return found;

}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [filter, setFilter ] = useState('');

  useEffect(() => {

    const fetchtData = async () => {
      const result = await axios.get('http://localhost:3001/persons');
      console.log(result.data)
    }
    fetchtData()
    
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!utilCheckIfNameExists(newName, persons)){
      setPersons(
        [...persons, {name: newName, number: newNumber}]
      );
      setNewName('');
      setNumber('');
    } else {
      alert(`${newName}  already exists`)
    }

  }
  const handleChange = (e) => e.target.name === 'name' ? setNewName(e.target.value) : setNumber(e.target.value)
  const handleFilter = (e) => setFilter(e.target.value)

  const peopleToShow = filter === '' ? persons : persons.filter(p => p.name.toLowerCase().includes(filter))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add New Person</h3>
      <Form name={newName} number={newNumber} hChange={handleChange} hSubmit={handleSubmit} />
      <h2>Numbers</h2>
      {peopleToShow.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default App