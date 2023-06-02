import { Link } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContainer } from '../../components/Auth/AuthContainer/AuthContainer';
import { AuthContentContainer } from '../../components/Auth/AuthContentContainer/AuthContentContainer';
import { AuthInput } from '../../components/Auth/AuthInput/AuthInput';
import { AuthSocialButton } from '../../components/Auth/AuthSocialButton/AuthSocialButton';
import { AuthTitle } from '../../components/Auth/AuthTitle/AuthTitle';
import { GoogleIcon } from '../../components/Icons/GoogleIcon';
import { AuthEmailIcon } from '../../components/Icons/AuthEmailIcon';
import { AuthLockIcon } from '../../components/Icons/AuthLockIcon';
import { AuthSubtitle } from '../../components/Auth/AuthSubtitle/AuthSubtitle';
import { PageRoutes } from '../../router/constants';
import {
  contentContainerStyles,
  forgetPasswordLinkStyles,
} from './SignIn.styles';
import { AuthMainButton } from '../../components/Auth/AuthMainButton/AuthMainButton';
import { AuthRedirectText } from '../../components/Auth/AuthRedirectText/AuthRedirectText';

export const SignIn: React.FC = () => {
  const schema = yup
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Sign In To DaPay' />
        <AuthSocialButton
          // eslint-disable-next-line no-console
          onClick={() => console.log('works')}
          socialIcon={<GoogleIcon />}
        />
        <AuthSubtitle text='OR' />
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Link
            to={PageRoutes.FORGET_PASSWORD}
            css={forgetPasswordLinkStyles}
          >
            Forget Password ?
          </Link>
          <AuthMainButton
            text='Sign in'
            type='submit'
          />
        </form>
        <AuthRedirectText
          mainText='Create A New Account?'
          linkText='Sign Up'
          linlUrl={PageRoutes.SIGNUP_PAGE}
        />
      </AuthContentContainer>
    </AuthContainer>
  );
};
