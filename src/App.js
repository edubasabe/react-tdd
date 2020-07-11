import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <div className="display-4 font-weight-bold" id="counter-value">{counter}</div>
      <button 
        className="btn btn-success mr-1"
        id="increment-button" onClick={()=> setCounter(counter + 1)}>Increment</button>
      <button 
        className="btn btn-danger ml-1"
        disabled={(counter === 0)}
        id="decrement-button" onClick={()=> setCounter((counter > 0 ? counter - 1 : 0))}>Decrement</button>
    </div>
  );
}

export default App;
