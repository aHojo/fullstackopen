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
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: "123-456" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')

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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => <p key={person.name}>{person.name} : {person.number}</p>)}
    </div>
  )
}

export default App