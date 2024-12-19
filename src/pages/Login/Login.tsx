import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router';
import { loginUser } from '../../api/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLogin } from '../../redux/slices/auth';

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const connected = useAppSelector((state) => state.auth.connected);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginUser,
    onError: (err) => console.log(err),
    onSuccess: ({ user: { email, id }, accessToken }) => {
      dispatch(onLogin({ email, id, accessToken }));
      navigate('/');
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  if (connected) {
    return <Navigate to='/' state={{ from: '/login', message: 'You are already logged in' }} />;
  }

  return (
    <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold text-center text-gray-700 mb-6'>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className='text-red-500 text-sm mt-2'>{errors.email.message}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-2'>{errors.password.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isPending}
        >
          {isPending ? 'Loading...' : 'Sign In'}
        </button>
        {error && <p className='text-red-500 text-sm mt-2'>{error.message}</p>}
      </form>

      <div className='mt-6 text-center'>
        <p className='text-sm text-gray-600'>
          Don't have an account?
          <Link to='/register' className='text-blue-500 hover:text-blue-700'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
