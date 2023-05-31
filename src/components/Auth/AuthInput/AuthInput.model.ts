import { UseFormRegister, FieldValues } from 'react-hook-form';
export type AuthInputType = 'email' | 'password' | 'text';

export interface AuthInputProps {
  placeholder: string;
  type: AuthInputType;
  hasError: boolean;
  inputFormName: string;
  register: UseFormRegister<FieldValues>;
  errorText?: string;
  inputIcon?: React.ReactNode;
}
