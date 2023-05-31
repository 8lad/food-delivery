export const getSeconds = (time: number): number | string => {
  const seconds = time % 60;
  return seconds < 10 ? `0${seconds}` : seconds;
};
