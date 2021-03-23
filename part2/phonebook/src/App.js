import React, { useState, useEffect } from 'react'
import Form from './components/form';
import Filter from './components/filter';
import Person from './components/person';
import personController from './utils/persons';

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
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [filter, setFilter ] = useState('');

  useEffect(() => {

    // const fetchtData = async () => {
    //   const result = await axios.get('http://localhost:3001/persons');
    //   console.log(result.data)
    // }
    // fetchtData()
    personController.getAll()
      .then((data) => {
        setPersons([...data])
      })
    
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("new Name", newName, "persons", persons)
    if (!utilCheckIfNameExists(newName, persons)){
      
      // axios.post('http://localhost:3001/persons', {name: newName, number: newNumber})
      // .then(response => {
      //   console.log("Response Data", response.data)
      //   setPersons(
      //     [...persons, response.data]
      //   );
      //   setNewName('');
      //   setNumber('');
      // })
      personController.addOne({name: newName, number: newNumber})
        .then(data => {
          console.log("Response Data", data);
        setPersons(
          [...persons, data]
        );
        setNewName('');
        setNumber('');
        })
      
      
    } else {
      const newNum = window.confirm(`${newName}  already exists, replace the old number with the new one? `);
      if (newNum) {
        const person = persons.find((p) => p.name.toLowerCase() === newName.toLowerCase())
        const newPerson = {...person, number: newNumber};
        personController.updateOne(newPerson.id, newPerson)
          .then(data => {
            const personRemoved = persons.filter(person => person.id !== data.id);
            setPersons([...personRemoved, data])
          
          })
      }
    }

  }

  const handleDelete = (id) => {

    personController.deleteOne(id).then(data => {
      setPersons(persons.filter(person => person.id !== id))
    })
    
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
      {peopleToShow.map(person => <Person key={person.name} name={person.name} number={person.number} id={person.id} hDelete={handleDelete}/>)}
    </div>
  )
}

export default App