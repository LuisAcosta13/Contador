import {useState} from "react"
import './App.css';

function App() {
  
  const [num, setNum] = useState(0)

  function Suma(num){
    ++num
    setNum(num)
  }

  function Resta(num){
    --num
    setNum(num)
  }

  return (
    <div className="App">
      <h1>El Gran Contador</h1>
      <div>
        <h2>{num}</h2>
      </div>
      <div>
        <button onClick={() => Suma(num)}> + </button>
        <button onClick={() => Resta(num)}> - </button>
      </div>
      <div>
        <button onClick={() => Suma(num+9)}> +10 </button>
        <button onClick={() => Resta(num-9)}> -10 </button>
      </div>
      <div>
        <button onClick={() => setNum(0)}> Reset </button>
      </div>
    </div>
  );
}

export default App;
