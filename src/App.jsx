import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Arun from './components/Arun';
import Footer from './components/common/Footer';

function App() {
  const [Inspiration,setName] = useState("Akaza")
  return (
    <>
      <Arun/>
      <h1>Welcome to Rengoku</h1>
      <div>
        <button onClick={()=> setName((name) => name = "Set Your Heart Ablaze")}>
           Get Inspiration
        </button>
        <h1>{Inspiration}</h1>
      </div>
      <Footer/>
    </>
  );
}

export default App
