import { useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
import { AuthMainButton } from '../../components/Auth/AuthMainButton/AuthMainButton';
import { AuthRedirectText } from '../../components/Auth/AuthRedirectText/AuthRedirectText';
import { schema } from './SignUp.utils';
import { PageRoutes } from '../../router/constants';
import { contentContainerStyles } from '../SignIn/SignIn.styles';
import { API_ENDPOINTS } from '../../utils/endpointConstants';
import { getLocalStorageValue } from '../../helpers/getLocalStorageValue';
import { LOCAL_STORAGE_TOKEN_OPTION } from '../../utils/globalConstants';
import { useAppDispatch } from '../../store/store';
import {
  fetchBaseRegistrationUser,
  fetchGoogleAuthUser,
} from '../../slices/userSlice';
import { UserSignup } from '../../globalTypes';
import { removeLocalStorageValue } from '../../helpers/removeLocalStorageValue';

export const SignUp: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [, setSearchParams] = useSearchParams();
  const userToken = getLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION);

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
      ...data,
      username: data.email,
    };
    dispatch(fetchBaseRegistrationUser(userData as UserSignup));
    reset();
    navigate(`${PageRoutes.HOME_PAGE}`);
  };

  useEffect(() => {
    const idToken = location.search;
    if (idToken) {
      dispatch(fetchGoogleAuthUser(idToken));
      setSearchParams({});
    }
  }, [dispatch, location.search, setSearchParams]);

  useEffect(() => {
    if (userToken) {
      navigate(`${PageRoutes.HOME_PAGE}`);
    }
  }, [navigate, userToken]);

  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Sign Up To DaPay' />
        <AuthSocialButton
          socialNetworkUrl={`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.GOOGLE_API_AUTH}`}
          socialIcon={<GoogleIcon />}
        />
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
