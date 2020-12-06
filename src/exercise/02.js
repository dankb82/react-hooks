// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  //Pass useState a function so we only read from local storage on page render
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.log('in the effect')
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
