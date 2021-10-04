export type User = {
  email?: string;
};

export type SignInAction = {
  type: string;
  payload: User;
};

export type SignOutAction = {
  type: string;
};

export type AuthActions = SignInAction | SignOutAction;
