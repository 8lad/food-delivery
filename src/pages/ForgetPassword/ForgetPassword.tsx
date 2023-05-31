import React from 'react';
import { AuthContainer } from '../../components/Auth/AuthContainer/AuthContainer';
import { AuthContentContainer } from '../../components/Auth/AuthContentContainer/AuthContentContainer';
import { contentContainerStyles } from '../SignIn/SignIn.styles';
import { AuthTitle } from '../../components/Auth/AuthTitle/AuthTitle';
import { AuthSubtitle } from '../../components/Auth/AuthSubtitle/AuthSubtitle';
import { AuthInput } from '../../components/Auth/AuthInput/AuthInput';
import { AuthEmailIcon } from '../../components/Icons/AuthEmailIcon';
import { AuthMainButton } from '../../components/Auth/AuthMainButton/AuthMainButton';

export const ForgetPassword: React.FC = () => {
  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Forget Password' />
        <AuthSubtitle text='Enter Your Mail To Reset' />
        <AuthInput
          inputIcon={<AuthEmailIcon />}
          placeholder='Email'
          type='email'
          hasError={false}
        />
        <AuthMainButton
          text='Verify'
          // eslint-disable-next-line no-console
          onClick={() => console.log('works')}
        />
      </AuthContentContainer>
    </AuthContainer>
  );
};
