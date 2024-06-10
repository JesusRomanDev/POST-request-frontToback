import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if([email,name].length === 0)return
    axios.post('http://localhost:3000',{
      name,
      email
    }).then(respuesta => console.log(respuesta))
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">Nombre</label>
          <input onChange={e => setName(e.target.value)} type="text" />
          <label htmlFor="">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
