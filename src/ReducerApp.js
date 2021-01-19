import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CLEAR: 'clear'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }

    case ACTIONS.CLEAR:
      return { count: state.count = 0 }
  }
}


function ReducerApp() {

  const [state, dispatch] = useReducer(reducer, { count: 0 }) 

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  function clear() {
    dispatch({ type: ACTIONS.CLEAR })
  }

  return(
    <div className='App-header'>
      <h1>Counter</h1>

      {state.count}

      <div className='actions'>

          <button onClick={decrement}>-</button>

          <button onClick={increment}>+</button>

          <button onClick={clear}>CE</button>

        </div>
    </div>
  )
}

export default ReducerApp