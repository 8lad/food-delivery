import { Link } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContainer } from '../../components/Auth/AuthContainer/AuthContainer';
import { AuthContentContainer } from '../../components/Auth/AuthContentContainer/AuthContentContainer';
import { AuthInput } from '../../components/Auth/AuthInput/AuthInput';
import { AuthSocialButton } from '../../components/Auth/AuthSocialButton/AuthSocialButton';
import { AuthTitle } from '../../components/Auth/AuthTitle/AuthTitle';
import { GoogleIcon } from '../../components/Icons/GoogleIcon';
import { AuthEmailIcon } from '../../components/Icons/AuthEmailIcon';
import { AuthLockIcon } from '../../components/Icons/AuthLockIcon';
import { AuthSubtitle } from '../../components/Auth/AuthSubtitle/AuthSubtitle';
import {
  contentContainerStyles,
  forgetPasswordLinkStyles,
} from './SignIn.styles';
import { AuthMainButton } from '../../components/Auth/AuthMainButton/AuthMainButton';
import { AuthRedirectText } from '../../components/Auth/AuthRedirectText/AuthRedirectText';
import { schema } from './SignIn.utils';
import { useAppDispatch } from '../../store/store';
import { fetchBaseLoginUser } from '../../slices/userSlice';
import { getLocalStorageValue } from '../../helpers/getLocalStorageValue';
import { API_ENDPOINTS } from '../../utils/endpointConstants';
import { removeLocalStorageValue } from '../../helpers/removeLocalStorageValue';
import { PageRoutes } from '../../router/constants';
import { LOCAL_STORAGE_TOKEN_OPTION } from '../../utils/globalConstants';

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const hasToken = getLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION);
    if (hasToken) {
      removeLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION);
    }
    const userData = {
      password: data.password,
      identifier: data.email,
    };
    dispatch(fetchBaseLoginUser(userData));
    reset();
  };

  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Sign In To DaPay' />
        <AuthSocialButton
          socialNetworkUrl={`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.GOOGLE_API_AUTH}`}
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
