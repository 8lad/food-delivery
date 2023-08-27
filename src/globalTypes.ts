export type AnyType = any;
export type Nullable<T> = T | null;

export interface UserLogin {
  identifier: string;
  password: string;
}

export interface UserSignup {
  password: string;
  email: string;
  fullName: string;
  username: string;
}
