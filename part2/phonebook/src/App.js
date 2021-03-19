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
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!utilCheckIfNameExists(newName, persons)){
      setPersons(
        [...persons, {name: newName}]
      );
      setNewName('');
    } else {
      alert(`${newName}  already exists`)
    }

  }
  const handleChange = (e) => setNewName(e.target.value)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App