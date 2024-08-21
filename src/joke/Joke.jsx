import axios from 'axios'

import { useEffect, useState } from 'react'
import { BsCircle } from "react-icons/bs";



const Joke = () => {
    const URL = import.meta.env.VITE_URL
   
  


 
const [jokes, setJokes] = useState([])
const [loading, setLoading] = useState(false)

const HandleGenerate =() =>{
    setLoading(true)
    axios.get(URL)

    .then((res) =>{
           
        setJokes(res.data)
        setLoading(false)
    }).catch((error) =>{
        console.log(error);
    })
}

    

 useEffect(() => {
  HandleGenerate()
 },
 [])

  return (
    <div className='app'>
        <div className='joke-Body'>
            <h1>Jokes Generator</h1>
           {
            loading ? <p><BsCircle style={{color: 'blue', fontSize: [80]}} /></p> : <>
             <h2  className='jokeId'>JOKE ID : {jokes.id}</h2>
             <p className='jokeValue'>{jokes.value} </p>
            </>
              
           }

           
        </div>
        <button onClick={() => HandleGenerate()} className='btn'>Generate code</button>
    
    </div>
  )
}

export default Joke