import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .required('This field is required')
      .email('Please enter the valid email value')
      .trim(),
    password: yup
      .string()
      .required('This field is required')
      .min(12, 'This field must contain at least 12 symbols')
      .max(20, 'This field must contain equal or less 20 symbols')
      .trim(),
  })
  .required();
