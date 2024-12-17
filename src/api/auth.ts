import axios from 'axios';

type RegisterData = { email: string; password: string };

type AuthenticationResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
};

export const registerUser = async ({ email, password }: RegisterData) => {
  const response = await axios.post<AuthenticationResponse>('http://localhost:4000/register', {
    email,
    password,
  });
  return response.data;
};

export const loginUser = async ({ email, password }: RegisterData) => {
  const response = await axios.post<AuthenticationResponse>('http://localhost:4000/login', {
    email,
    password,
  });
  return response.data;
};
