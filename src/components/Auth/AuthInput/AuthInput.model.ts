export type AuthInputType = 'email' | 'password' | 'text';

export interface AuthInputProps {
  placeholder: string;
  type: AuthInputType;
  hasError: boolean;
  errorText?: string;
  inputIcon?: React.ReactNode;
}
