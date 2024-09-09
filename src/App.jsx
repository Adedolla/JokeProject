import { useState } from 'react'

import Joke from './joke/Joke.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Joke/>
 
    </>
  )
}

export default App
