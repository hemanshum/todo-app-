import Parse from 'parse/react-native.js';
import { autoLogin } from '../slices/userSlice';

export const autoLoginUser = () => async (dispatch) => {
  const currentUser = await Parse.User.currentAsync();
  if (currentUser) {
    dispatch(autoLogin({ login: true, username: currentUser.getUsername() }));
  } else {
    dispatch(autoLogin({ login: false, username: '' }));
  }
};
