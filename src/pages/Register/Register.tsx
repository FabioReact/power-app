import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { schema } from './schema';

type Inputs = z.infer<typeof schema>;

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' {...register('email', { required: true })} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' {...register('password', { required: true })} />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input
          type='password'
          id='confirmPassword'
          {...register('confirmPassword', { required: true })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};
