import React, { useState, useEffect } from 'react';
import { AuthInputProps, AuthInputType } from './AuthInput.model';
import { AuthHiddenEyeIcon } from '../../Icons/AuthHiddenEyeIcon';
import { authInputStyles } from './AuthInput.styles';
import { AuthErrorMessage } from '../AuthErrorMessage/AuthErrorMessage';

export const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  inputIcon,
  register,
  inputFormName,
  errorText,
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
          {...register(inputFormName)}
        />
        {isInputPassword && <AuthHiddenEyeIcon onClick={showHidePassword} />}
      </label>
      {errorText && <AuthErrorMessage errorText={errorText} />}
    </>
  );
};
