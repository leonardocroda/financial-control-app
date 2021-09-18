export type User = {
  id: number;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
};

export type SignInAction = {
  type: string;
  payload: User;
};

export type SignOutAction = {
  type: string;
};

export type AuthActions = SignInAction | SignOutAction;
