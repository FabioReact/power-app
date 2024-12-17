import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { schema } from './schema';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/auth';
import { useNavigate } from 'react-router';

type Inputs = z.infer<typeof schema>;

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'email@email.fr',
      password: 'Qwerty1!',
      confirmPassword: 'Qwerty1!',
    },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: registerUser,
    onError: (err) => console.log(err),
    onSuccess: (data) => {
      console.log(data);
      navigate('/');
    },
  });

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} className='flex flex-col'>
        <label htmlFor='email'>Email:</label>
        <input
          className='border-b border-black'
          type='email'
          id='email'
          {...register('email', { required: true })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor='password'>Password:</label>
        <input
          className='border-b border-black'
          type='password'
          id='password'
          {...register('password', { required: true })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input
          className='border-b border-black'
          type='password'
          id='confirmPassword'
          {...register('confirmPassword', { required: true })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button
          type='submit'
          disabled={isPending}
          className='bg-black text-white rounded mt-4 disabled:cursor-not-allowed disabled:opacity-50'
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p className='text-red-600 text-sm'>{error.message}</p>}
    </section>
  );
};
