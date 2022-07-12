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
