import { useRef, useState } from 'react';

const LearnUseRef = () => {
  const [email, setEmail] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    console.log({ email, username });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  console.log('Render');

  return (
    <section>
      <h1>LearnUseRef</h1>
      <p>Value of input:</p>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' ref={usernameRef} />
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' value={email} onChange={onChangeEmail} />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default LearnUseRef;
