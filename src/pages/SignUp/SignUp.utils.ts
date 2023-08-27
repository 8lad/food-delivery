import * as yup from 'yup';

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('This field is required')
      .matches(
        /^[aA-zZ|\s|-]{3,30}$/gm,
        'This field should contains only letters (min - 2, max - 30), spaces, and these signs: -, `',
      )
      .trim(),
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
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,20}$/gm,
        'Password must contain at least one capital letter, one number, and one special symbol',
      )
      .trim(),
  })
  .required();
