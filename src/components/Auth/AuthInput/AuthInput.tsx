import React, { useState, useEffect } from 'react';
import { AuthInputProps, AuthInputType } from './AuthInput.model';
import { AuthHiddenEyeIcon } from '../../Icons/AuthHiddenEyeIcon';
import { authInputStyles } from './AuthInput.styles';
import { AuthErrorMessage } from '../AuthErrorMessage/AuthErrorMessage';

export const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  inputIcon,
  hasError,
  errorText = 'Invalid value',
  type = 'text',
}) => {
  const isInputPassword = type === 'password';
  const [inputType, setInputType] = useState<AuthInputType>('text');
  const showHidePassword = () => {
    if (inputType === 'text') {
      setInputType('password');
      return;
    }
    setInputType('text');
  };

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <>
      <label css={authInputStyles}>
        {inputIcon && inputIcon}
        <input
          placeholder={placeholder}
          type={inputType}
        />
        {isInputPassword && <AuthHiddenEyeIcon onClick={showHidePassword} />}
      </label>
      {hasError && <AuthErrorMessage errorText={errorText} />}
    </>
  );
};
