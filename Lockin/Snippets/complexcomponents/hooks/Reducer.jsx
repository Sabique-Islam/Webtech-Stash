// similar to useState()
// https://react.dev/reference/react/useReducer

import {useReducer, useState} from 'react'

const Reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error();
  }
}
export default function Counters(){
  const [state, dispatch] = useReducer(Reducer, {count: 0});
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
};
