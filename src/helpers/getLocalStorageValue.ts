export const getLocalStorageValue = (keyName: string): string | null => {
  return localStorage.getItem(keyName);
};
