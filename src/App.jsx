import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('button Clicked')
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    // <> fregment. also like <div> </div> 
    // </>
    <>

      <h3>React Core Concept Part2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert('Press Me') }}>Press Me</button>

      <button onClick={() => addFive(5)} >Add</button>

    </>
  )
}

export default App
