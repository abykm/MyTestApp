import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 2 });
  function increment() {
    dispatch({ type: 'INCREMENT' });
  }
  function decrement() {
    dispatch({ type: 'DECREMENT' });
  }
  return (
    <div>
      <p>State: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseReducer;
