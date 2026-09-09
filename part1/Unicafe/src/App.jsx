import { useState } from "react"

const StatisticLine=(props)=>{
  return(
     <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
     </tr>
  )
}

const Statistics=({good,neutral,bad,sum,freq})=>{
 
 let positive= (good/freq)*100;
 let average=sum/freq;
 return(
  <table>
  <StatisticLine text="good" value={good}/>
  <StatisticLine text="neutral" value={neutral}/>
  <StatisticLine text="bad" value={bad}/>
  <StatisticLine text="positive" value={`${positive}%`}/>
  <StatisticLine text="average" value={average}/>
  </table>
  
 )
   
}
 const Button=(props)=>{
  

   

     return(
     <>
      <button onClick={props.handler}>{props.text}</button>
     </>)

 }

const App=()=>{
  const [good,setgood]=useState(0);
  const [neutral,setneutral]=useState(0);
  const [bad,setbad]=useState(0);
  const [sum,setsum]=useState(0);
  const [freq,setfreq]=useState(0);
  
  function handlegoodClick(){
       setgood(good+1);
       setsum(sum+1);
       setfreq(freq+1);
  
  }
  const handleneutralClick=()=>{
     setneutral(neutral+1);
     setfreq(freq+1);
  }
  const handlebadClick=()=>{
       setbad(bad+1);
       setsum(sum-1);
       setfreq(freq+1);
  }
  

  return (
    <div>
      <h1>give feedback</h1> 
      <Button handler={handlegoodClick} text="good"/>
      <Button handler={handleneutralClick} text="neutral"/>
      <Button handler={handlebadClick} text="bad"/>
      <h1>Statistics</h1>
      {freq===0?<p>no feedback given</p>: <Statistics good={good} neutral={neutral} bad={bad} sum={sum} freq={freq}/>}
    </div>
  )

}
export default App