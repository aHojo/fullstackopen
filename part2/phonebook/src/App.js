import React, { useState } from 'react'

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
      <h3>Filter by name</h3>
      <input  value={filter} onChange={handleFilter} />
      <h3>Add New Person</h3>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name="name" value={newName} onChange={handleChange} />
          <br />
          number: <input name="number" value={newNumber} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map(person => <p key={person.name}>{person.name} : {person.number}</p>)}
    </div>
  )
}

export default App