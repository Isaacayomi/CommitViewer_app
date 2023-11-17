import { useState, useEffect } from 'react'
import axios from 'axios'
import Entirepages from './pages/entirepages'
import './App.css'

const App = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get("https://api.github.com")
      .then((res) => { setUser(res.data) })
  }, [])
  return (
    <div>
      <Entirepages />
    </div>
  )
}

export default App
