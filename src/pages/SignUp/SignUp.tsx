import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContainer } from '../../components/Auth/AuthContainer/AuthContainer';
import { AuthContentContainer } from '../../components/Auth/AuthContentContainer/AuthContentContainer';
import { AuthInput } from '../../components/Auth/AuthInput/AuthInput';
import { AuthSocialButton } from '../../components/Auth/AuthSocialButton/AuthSocialButton';
import { AuthSubtitle } from '../../components/Auth/AuthSubtitle/AuthSubtitle';
import { AuthTitle } from '../../components/Auth/AuthTitle/AuthTitle';
import { AuthEmailIcon } from '../../components/Icons/AuthEmailIcon';
import { AuthLockIcon } from '../../components/Icons/AuthLockIcon';
import { GoogleIcon } from '../../components/Icons/GoogleIcon';
import { AuthUserIcon } from '../../components/Icons/AuthUserIcon';
import { contentContainerStyles } from '../SignIn/SignIn.styles';
import { PageRoutes } from '../../router/constants';
import { AuthMainButton } from '../../components/Auth/AuthMainButton/AuthMainButton';
import { AuthRedirectText } from '../../components/Auth/AuthRedirectText/AuthRedirectText';

export const SignUp: React.FC = () => {
  const schema = yup
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
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,20}$/gm,
          'Password must contain at least one capital letter, one number, and one special symbol',
        )
        .trim(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Sign Up To DaPay' />
        <AuthSocialButton socialIcon={<GoogleIcon />} />
        <AuthSubtitle text='OR' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            inputIcon={<AuthUserIcon />}
            placeholder='Full Name'
            type='text'
            hasError={false}
            register={register}
            inputFormName='fullName'
            errorText={
              errors.fullName?.message && (errors.fullName.message as string)
            }
          />
          <AuthInput
            inputIcon={<AuthEmailIcon />}
            placeholder='Email'
            type='email'
            hasError={false}
            register={register}
            inputFormName='email'
            errorText={
              errors.email?.message && (errors.email.message as string)
            }
          />
          <AuthInput
            inputIcon={<AuthLockIcon />}
            placeholder='Password'
            type='password'
            hasError={false}
            register={register}
            inputFormName='password'
            errorText={
              errors.password?.message && (errors.password.message as string)
            }
          />
          <AuthMainButton
            text='Sign up'
            type='submit'
          />
        </form>
        <AuthRedirectText
          mainText='Already Have An Account?'
          linkText='Log In'
          linlUrl={PageRoutes.SIGNIN_PAGE}
        />
      </AuthContentContainer>
    </AuthContainer>
  );
};
