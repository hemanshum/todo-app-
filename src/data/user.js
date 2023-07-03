import Parse from 'parse/react-native.js';

export const createNewUser = async (username, password) => {
  const user = new Parse.User();
  user.set('username', username);
  user.set('password', password);

  try {
    await user.signUp();
  } catch (error) {
    console.log({ error });
  }
};
