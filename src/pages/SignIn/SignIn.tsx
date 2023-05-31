import { Link } from 'react-router-dom';
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
  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Sign In To DaPay' />
        <AuthSocialButton socialIcon={<GoogleIcon />} />
        <AuthSubtitle text='OR' />
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
        <Link
          to={PageRoutes.FORGET_PASSWORD}
          css={forgetPasswordLinkStyles}
        >
          Forget Password ?
        </Link>
        <AuthMainButton
          text='Sign in'
          // eslint-disable-next-line no-console
          onClick={() => console.log('works')}
        />
        <AuthRedirectText
          mainText='Create A New Account?'
          linkText='Sign Up'
          linlUrl={PageRoutes.SIGNUP_PAGE}
        />
      </AuthContentContainer>
    </AuthContainer>
  );
};
