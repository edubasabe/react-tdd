import React, { Fragment, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Fragment>
      <div className="display-4 font-weight-bold" id="counter-value">{counter}</div>
    <button 
      className="btn btn-success mr-1"
      id="increment-button" onClick={()=> setCounter(counter + 1)}>Increment</button>
    <button 
      className="btn btn-danger ml-1"
      disabled={(counter === 0)}
      id="decrement-button" onClick={()=> setCounter((counter > 0 ? counter - 1 : 0))}>Decrement</button>
    </Fragment>
  )
}

export default Counter;