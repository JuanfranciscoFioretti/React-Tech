import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppContainer from './container/AppContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppContainer/>
    </div>
  )
}

export default App
