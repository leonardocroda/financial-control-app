import { SignInAction } from '@store/types/auth';

export enum SIGN_IN_ACTION_TYPES {
  SIGN_IN = 'auth/SIGN_IN',
  SING_OUT = 'auth/SIGN_OUT',
}

export const signIn = (
  id: number,
  email: string,
  firstName: string,
  lastName: string,
): SignInAction => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_IN,
  payload: {
    id,
    email,
    firstName,
    lastName,
  },
});
