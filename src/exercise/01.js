// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting() {
  const [name, setName] = React.useState('')

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      /* I added autoComplete="off" because the text dropdown was annoying*/
      <form autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
