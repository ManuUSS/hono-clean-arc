import { z } from 'zod';

export const RegisterSchema = z.object({
  email:           z.string().email(),
  password:        z.string().min( 6 ),
  confirmPassword: z.string().min( 6 ),
  name:            z.string(),
  lastName:        z.string()
}).superRefine(({ password, confirmPassword }, ctx) => {

  if( password !== confirmPassword ) {
    ctx.addIssue({
      code: 'custom',
      message: 'Passwords do not match',
      path: ['confirmPassword']
    });
  };

});


