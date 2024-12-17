import { z } from 'zod';

export const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .regex(/^(?=.*[a-z]).*$/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/^(?=.*[A-Z]).*$/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/^(?=.*\d).*$/, {
        message: 'Password must contain at least one digit',
      })
      .regex(/^(?=.*?[#?!@$%^&*-]).*$/, {
        message: 'Password must contain at least one special character',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
