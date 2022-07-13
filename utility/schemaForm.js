// regex
const emailRe =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const signUpForm = {
  avatar: '',
  name: '',
  surname: '',
  email: '',
  password: '',
  editorialBoard: '',
};

export const signUpFormSchema = {
  name: {
    required: true,
  },
  surname: {
    required: true,
  },
  email: {
    required: true,
    isValid: (value) => value.match(emailRe),
  },
  password: {
    required: true,
    isValid: (value) => value.length >= 6,
  },
};

export const signInForm = {
  email: '',
  password: '',
};

export const signInFormSchema = {
  email: {
    required: true,
    isValid: (value) => value.match(emailRe),
  },
  password: {
    required: true,
    isValid: (value) => value.length >= 6,
  },
};
