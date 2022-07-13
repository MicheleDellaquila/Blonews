import axios from 'axios';

export const createUser = async (formData) => {
  try {
    return await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PATH}/signUp`,
      headers: {
        Upload: 'users',
      },
      data: formData,
    });
  } catch (e) {
    return e;
  }
};

export const loginUser = async (data) => {
  try {
    return await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PATH}/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  } catch (e) {
    return e;
  }
};
