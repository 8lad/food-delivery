import { useRef, ChangeEvent, KeyboardEvent } from 'react';
import { authVerificationInputsStyles } from './AuthVerificationInputs.styles';
import { AuthVerificationInputsProps } from './AuthVerificationInputs.model';

export const AuthVerificationInputs: React.FC<AuthVerificationInputsProps> = ({
  verificationCode,
  setVerificationCode,
}) => {
  const inputRefs = useRef<null | HTMLInputElement[]>([]);
  const inputValueMaxLength = 1;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (inputRefs.current) {
      const value = event.target.value;
      const activeInputClass = 'active';
      const isValueChanged = value.length <= inputValueMaxLength;
      const isValueFilled =
        value.length === inputValueMaxLength &&
        index < verificationCode.length - 1;

      if (isValueChanged) {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;
        setVerificationCode(updatedCode);
      }
      if (isValueFilled) {
        inputRefs.current[index + 1].focus();
        inputRefs.current[index].classList.add(activeInputClass);
      } else {
        inputRefs.current[index].classList.remove(activeInputClass);
      }
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (inputRefs.current) {
      const isCurrentInputEmpty =
        event.key === 'Backspace' &&
        verificationCode[index] === '' &&
        index > 0;

      if (isCurrentInputEmpty) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < verificationCode.length; i++) {
      inputs.push(
        <input
          key={i}
          type='number'
          maxLength={inputValueMaxLength}
          value={verificationCode[i]}
          onChange={(event) => handleInputChange(event, i)}
          onKeyDown={(event) => handleKeyDown(event, i)}
          ref={(ref: HTMLInputElement) => {
            if (inputRefs.current) {
              return (inputRefs.current[i] = ref);
            }
          }}
        />,
      );
    }

    return inputs;
  };

  return <div css={authVerificationInputsStyles}>{renderInputs()}</div>;
};
