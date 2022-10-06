import './App.css';

import { useEffect, useState, useReducer, useRef } from 'react';
import { FaStar } from 'react-icons/fa'

function App(props) {
  //EXERCISE 1
 /*  const [status, setStatus] = useState('Not delivered')

  return (
    <div className="App">
      <h1>The package is: {status}.</h1>
      <button onClick={() => {
        setStatus('Delivered')
      }} type="">Deliver</button>
    </div>
  ); */
  // EXERCISE 2
  /* const [checked, setChecked] = useState(false)
  return(
    <div>
      <input
        type='checkbox'
        value={checked}
        onChange={ () => {
          setChecked(!checked)
        }} />
      <p>{checked ? 'checked' : 'not checked'}</p>
      
    </div>
  ) */
  //EXERCISE 3
  /* const createArray = (length) => [
    ...Array(length)
  ]

  function Star({ selected = false, onSelect}) {
    return(
      <FaStar
        color={selected ? 'red': 'gray'}
        onClick={onSelect}
      />
    )
  }

  function StartRating({ totalStars=5}){
    const [
      selectedStars,
      setSelectedStars
    ] = useState(0)
    return(
      <>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={ () => setSelectedStars(i+1)} 
            />
        )) }
        <p>
          {selectedStars} of {totalStars}
        </p>
      </>
    )
  }
  return (
    <div className="App">
      <StartRating/>
    </div> 
  )*/

  //EXERCISE 4
  /* const [name, setName] = useState('Jan')
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    console.log(`Celebrate ${name}`)
  }, [name]) //Only use the second parameter when you want to call one time and its dependency

  useEffect(() => {
    console.log(`The user is ${admin ? 'admin' : 'not admin'}`)
  }, [admin])

  return (
    <section>
      <p>Congratulation {name}!</p>
      <button onClick={() => {
        setName('Will')
      }}>Change Winner</button>
      <p>{admin ? 'logged in' : 'not logged in'}</p>
      <button onClick={() => {
        setAdmin(true)
      }} >Logge in!</button>
    </section>
  ) */

  //EXERCISE 5
  /* const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber, 
    0
  )

  return <h1 onClick={() => { setNumber(1)}}>{number}</h1> */

  //EXERCISE 6
  const sound = useRef()
  const color = useRef()

  const submit = e => {
    e.preventDefault() //NOT RELOADING THE PAGE
    const soundVal = sound.current.value
    const colorVal = color.current.value
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value = ""
    color.current.value = ""
  }

  return(
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder='Sound...'/>
      <input ref={color} type="color"/>
      <button>ADD</button>
    </form>
  )
}

export default App;
