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
  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Sign Up To DaPay' />
        <AuthSocialButton socialIcon={<GoogleIcon />} />
        <AuthSubtitle text='OR' />
        <AuthInput
          inputIcon={<AuthUserIcon />}
          placeholder='Full Name'
          type='text'
          hasError={false}
        />
        <AuthInput
          inputIcon={<AuthEmailIcon />}
          placeholder='Email'
          type='email'
          hasError={false}
        />
        <AuthInput
          inputIcon={<AuthLockIcon />}
          placeholder='Password'
          type='password'
          hasError={false}
        />
        <AuthMainButton
          text='Sign up'
          // eslint-disable-next-line no-console
          onClick={() => console.log('works')}
        />
        <AuthRedirectText
          mainText='Already Have An Account?'
          linkText='Log In'
          linlUrl={PageRoutes.SIGNIN_PAGE}
        />
      </AuthContentContainer>
    </AuthContainer>
  );
};
