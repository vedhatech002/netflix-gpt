export const checkValidData = (email, password, username) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (username) {
    const isUserNameValid = username.length >= 3 ? true : false;
    if (isUserNameValid) {
      return;
    } else {
      return "name should be morethan 3characters";
    }
  }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Pasword is not valid";

  return null;
};
