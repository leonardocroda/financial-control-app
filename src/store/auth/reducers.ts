import { SignInAction, User } from '@store/types/auth';
import { AUTH_ACTION_TYPES } from './actions';

export const initialState: User | {} = {};

const reducer = (state: User = initialState, action: SignInAction) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SIGN_IN:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
