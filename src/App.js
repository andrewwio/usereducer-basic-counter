import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
  
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })


  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }
  
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;


// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(prevCount => prevCount + 1)
//   }
  
//   function decrement() {
//     setCount(prevCount => prevCount - 1)
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>{count}</span>
//       <button onClick={increment}>+</button>
//     </>
//   );
// }

// export default App;
