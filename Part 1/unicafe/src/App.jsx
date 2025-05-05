import { useState } from 'react'


const Statistics = ({good,neutral,bad}) =>{
 
  const sum = good + neutral + bad 
  const positive = (good / sum) *100
  const average = ((good*1) + (bad*-1) + (neutral*0)) / sum
  
if(sum!=0){

  return(
    <>
    <h2>Statistics</h2>
    <table>
      <tbody>
      <tr>
      <td>All {sum}</td></tr>
      <tr><td>Average {average.toFixed(1)}</td></tr>
      <tr><td>Positive {positive.toFixed(1)}%</td></tr>
      
      </tbody>
    </table>
    </>
  )
}else return <p>No Feedback Given</p>
 
}


const Button = (props)=>{
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine =({text, value}) => {
    
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )

}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const feedback = <h1>Give feedback</h1>
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


const goodComm = ()=> {
console.log ('A good one')
setGood(good + 1)
}

const badComm = ()=> {
console.log ('A bad one')
setBad(bad + 1)
}


const neutralComm = ()=> {
console.log ('mneh')
setNeutral (neutral + 1)
}



  return (
    <>
    {feedback}
   
      <Button onClick={goodComm} text='Good'></Button>
      <Button onClick={neutralComm} text ='Neutral'></Button>
      <Button onClick={badComm} text='Bad'></Button>   
    

    <StatisticLine text='Good' value={good}/>
    <StatisticLine text='Neutral' value={neutral}/>
    <StatisticLine text='Bad' value={bad}/>
   
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    
    
    </>
  )
}

export default App