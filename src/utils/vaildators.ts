export const validateEmail = (value: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

export const validatePassword = (value: string): boolean => {
  return value.length >= 8;
};
