import { useState, useEffect } from 'react';
import { authVerificationTimerStyles } from './AuthVerificationTimer.styles';
import { getMinuteststs } from '../../../helpers/getMinutes';
import { getSeconds } from '../../../helpers/getSeconds';
import { AuthErrorMessage } from '../AuthErrorMessage/AuthErrorMessage';

export const AuthVerificationTimer: React.FC = () => {
  const baseLeftSeconds = 240;
  const timerStep = 1000;
  const [leftTime, setLeftTime] = useState(baseLeftSeconds);
  const isTimeOver = leftTime <= 0;

  useEffect(() => {
    const baseTime = Date.now();
    let countingTime: number;
    if (!isTimeOver) {
      countingTime = setTimeout(() => {
        const timeDifference = Math.floor((Date.now() - baseTime) / timerStep);
        setLeftTime((prevValue) => prevValue - timeDifference);
      }, 1000);
    }
    return () => {
      clearTimeout(countingTime);
    };
  }, [isTimeOver, leftTime]);

  return (
    <>
      <div css={authVerificationTimerStyles}>
        <span>(</span>
        <span>{getMinuteststs(leftTime)}</span>
        <span>:</span>
        <span>{getSeconds(leftTime)}</span>
        <span>)</span>
      </div>
      {isTimeOver && (
        <AuthErrorMessage errorText='Time is run out. Try again later' />
      )}
    </>
  );
};
