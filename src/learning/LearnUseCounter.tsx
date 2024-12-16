import { useCounter } from "../hooks/useCounter"

/*
    List of custom hooks:
    - https://usehooks-ts.com/
    - https://usehooks.com/
    - https://antonioru.github.io/beautiful-react-hooks/
*/

const LearnUseCounter = () => {
    const { counter, increment, decrement } = useCounter();

  return (
    <div>
        <h1>LearnUseCounter</h1>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default LearnUseCounter