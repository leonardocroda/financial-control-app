import { SignInAction } from '@store/types/auth';

export enum AUTH_ACTION_TYPES {
  SIGN_IN = 'auth/SIGN_IN',
  SING_OUT = 'auth/SIGN_OUT',
}

export const signIn = (email: string): SignInAction => ({
  type: AUTH_ACTION_TYPES.SIGN_IN,
  payload: {
    email,
  },
});
