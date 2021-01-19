useReducer() is another way to manage state and rerender a component whenever the state changes.

useReducer() is meant to be a more concrete way to handle complex state through set actions that you can perform on state.

It works by taking the current version of state and modifying it into a new version based on the action performed. 

## Syntax
- To use the useReducer() hook, we have to import it like useState ()

# Declaring
- Like with useState, the way to use the useReducer() hook is by declaring an array with two things inside it:

- const [count, setCount] = useState()
- const [state, dispatch] = useReducer()

1. The first value is the state
2. The second value is a function called dispatch()

# useReducer()
The useReducer function takes two parameters:
- A reducer() function
- initial state

const [] = useState(0) 
const [] = useReducer(reducer, { count: 0 })

# dispatch()
The dispatch function is what we call in order to update our state.
Dispatch calls the reducer function for us and executes that code.

Inside of dispatch() you can pass a 'type' which describes the type of action you are performing, such as 'increment' or 'decrement,' like so:

function increment() {
  dispatch({ type: 'increment' })
}

function decrement() {
  dispatch({ type: 'decrement' })
}

# Switch-Case
Inside of our reducer, we state contingencies on code blocks to run based on the action received from the dispatch() function, like so:

function reducer(state, action) {

  switch(action.type) {

    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count -1 }
  }
}

In 'case' of increment, we take the previous state and add one to it.

In case of decrement, we take the previous state and remove one from it.

Inside of Switch blocks, it is sometimes a good idea to define a default case which is the default behavior in case of an undefined action.


# reducer()
A reducer is a function we perform on our current state to get a new version of that state.

It receives two arguments:
1.  The current state
2. An action

The action is what gets passed to the dispatch function when it calls the reducer and the reducer returns the new, updated state. 

# Alternative Style
Instead of hardcoding string values for our different cases, we can create an object that holds properties that map to a string, and use the properties instead. 

We have two main advantages to using this:
1. Auto-complete which reduces liklihood of mistakes
2. If we decide to change the string value, that change will persist wherever we've used our actions property.

Ex:

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CLEAR: 'clear'
}
