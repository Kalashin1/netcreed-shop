import { z } from 'zod';

export const UserSchema = {
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string().min(11),
  country: z.string().max(3).min(3),
  state: z.string().min(3),
  city: z.string().min(3),
  address: z.string().min(10),
  zip: z.string().min(6)
} as const;
