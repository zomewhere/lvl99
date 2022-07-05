import { useState } from 'react';

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increment,
    decrement,
  };
};

export const onAdd = (qty) => {
  alert(`Agregaste ${qty} productos`);
  console.log(`Agregaste ${qty} productos`);
};