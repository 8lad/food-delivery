import { useState } from 'react';
import { AuthContainer } from '../../components/Auth/AuthContainer/AuthContainer';
import { AuthContentContainer } from '../../components/Auth/AuthContentContainer/AuthContentContainer';
import { AuthMainButton } from '../../components/Auth/AuthMainButton/AuthMainButton';
import { AuthSubtitle } from '../../components/Auth/AuthSubtitle/AuthSubtitle';
import { AuthTitle } from '../../components/Auth/AuthTitle/AuthTitle';
import { contentContainerStyles } from '../SignIn/SignIn.styles';
import { AuthVerificationInputs } from '../../components/Auth/AuthVerificationInputs/AuthVerificationInputs.jsx';

export const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  return (
    <AuthContainer>
      <AuthContentContainer styles={contentContainerStyles}>
        <AuthTitle text='Verify Email' />
        <AuthSubtitle text='Code Send To Your Email' />
        <AuthVerificationInputs
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
        />
        <AuthMainButton
          text='Verify'
          onClick={() => console.log('works')}
        />
      </AuthContentContainer>
    </AuthContainer>
  );
};
