import React, {useState} from 'react';

function  getRandomNumber(num = 0) {
  return Math.floor(Math.random() * num);
}

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>
function App() {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const getIndex = () => {

    setSelected(() => setSelected(getRandomNumber(anecdotes.length)));
  }
  const updateScore = () => {
    let copy = [...points];
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <br/>
      <h2>Has {points[selected]} votes.</h2>
      <Button handler={getIndex} text="NEXT" />
      <Button handler={updateScore} text="VOTE" />
    </div>
  );
}

export default App;
