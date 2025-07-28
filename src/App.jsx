import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Arun from './components/Arun';

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Change Name")

  return (
    <>
      <Arun/>
      <h1>Hello Welcome</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          counter is {count}
        </button>
        <button onClick={()=> setName((name) => name = "Arunkumar M")}>
           Click Me
        </button>
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default App
