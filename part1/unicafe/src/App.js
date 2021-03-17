import React, {useState} from "react";


const Header = ({heading}) => <h1>{heading}</h1>
const Button = ({handler, text}) => <button onClick={handler}>{text}</button>


const Statistic = ({text, value}) => <div>{text} {"=>"} {value} </div>
const Statistics = ({good, neutral, bad}) => {

  const total =  (good + bad + neutral)

  if (total === 0) return <div>No Feedback Given</div>
  return (
  <div>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="All" value={total} />
    <Statistic text="Average" value={(good - bad) / total} />
    <Statistic text="Postitive" value={good / total} />
  </div>
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
