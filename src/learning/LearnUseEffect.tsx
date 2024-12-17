import { useEffect, useRef, useState } from 'react';

const LearnUseEffect = () => {
  console.log('--- Code execution ---');
  const isFirstRender = useRef(true);
  const [counter, setCounter] = useState(0);

  const doubleCount = () => {
    setCounter((c) => c + 1); // 0 + 1
    setCounter((c) => c + 1); // 0 + 1
  };

  useEffect(() => {
    console.log('--- Inside useEffect ---');
    return () => {
      console.log('--- Inside useEffect return ---');
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current === false) {
      console.log('--- Will Log only on new renders ---');
    }
    isFirstRender.current = false;
    return () => {
      console.log(`--- Counter - Component will unmount with value ${counter}---`);
    };
  }, [counter]);

  return (
    <>
      <h1>UseEffect</h1>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={doubleCount}>Increment</button>
      </div>
    </>
  );
};

export { LearnUseEffect };
