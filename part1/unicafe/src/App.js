import React, {useState} from "react";


const Header = ({heading}) => <h1>{heading}</h1>
const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const Statistics = ({good, neutral, bad}) => {

  const total =  (good + bad + neutral) ? (good + bad + neutral) : 0
  return (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {good + bad + neutral}</p>
    <p>average: {(good - bad) / (good + bad + neutral)}</p>
    <p>Positive: {good /  (good + bad + neutral)} %</p>
  </>
  )
}

function App() {
  
  // save clicks of each button
  const [good, setGood] = useState(0);  
  const [neutral, setNeutral] = useState(0);  
  const [bad, setBad] = useState(0);  

  const handleGood = () => setGood(() => setGood(good+1));
  const handleNeutral = () => setNeutral(() => setNeutral(neutral+1));
  const handleBad = () => setBad(() => setBad(bad+1));
  return (

    <React.Fragment>
      <Header heading="Give Feedback" />
      <Button handler={handleGood} text="Good" />
      <Button handler={handleNeutral} text="Neutral" />
      <Button handler={handleBad} text="Bad" />
      <Header heading="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </React.Fragment>
  );
}

export default App;
