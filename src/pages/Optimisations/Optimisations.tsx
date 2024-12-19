import React, { memo, useCallback, useMemo, useState } from 'react';

interface ButtonPros extends React.PropsWithChildren {
  onClick: () => void;
}

const Button = memo(({ onClick, children }: ButtonPros) => {
  console.log('Render Button ', children);
  return <button onClick={onClick}>{children}</button>;
});

const Title = memo(({ content }: { content: string }) => {
  console.log('Render Title');
  return <h1>{content}</h1>;
});

const expensiveFunction = (nb: number) => {
  let str = '';
  for (let i = 0; i < 20000000; i++) {
    str += nb;
  }
  return nb * 2;
};

const Optimisations = () => {
  console.log('Render Optimisations');

  const [counter, setCounter] = useState(0);
  const [nb, setNb] = useState(1);
  const result = useMemo(() => expensiveFunction(nb), [nb]);

  const increment = useCallback(() => {
    setCounter((c) => c + nb);
  }, [nb]);

  const decrement = useCallback(() => {
    setCounter((c) => c - nb);
  }, [nb]);

  return (
    <section>
      <Title content='Optimisations' />
      <div>
        <p>Counter: {counter}</p>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <br />
        <label htmlFor='incrementBy'>Increment By</label>
        <input
          type='number'
          name='incrementBy'
          id='incrementBy'
          value={nb}
          onChange={(e) => setNb(+e.target.value)}
        />
        <p>Result: {result}</p>
      </div>
    </section>
  );
};

export default Optimisations;
