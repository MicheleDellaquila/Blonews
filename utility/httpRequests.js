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

export const deleteNewsFromWishlist = async (token, articleId) => {
  try {
    return await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PATH}/deleteWishlist`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({ id: articleId }),
    });
  } catch (e) {
    return e;
  }
};

export const addNewsToWishlist = async (token, userId, articleId) => {
  try {
    return await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PATH}/saveWishlist`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        userId: userId,
        articleId: articleId,
      }),
    });
  } catch (e) {
    return e;
  }
};

export const createComment = async (token, idArticle, idUser, textComment) => {
  try {
    return await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PATH}/createComment`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        idArticle: idArticle,
        idUser: idUser,
        content: textComment,
        publishedAt: new Date(),
      }),
    });
  } catch (e) {
    return e;
  }
};

export const responseComment = async (
  token,
  idArticle,
  idUserComment,
  idUser,
  textComment,
) => {
  try {
    return await axios({
      method: 'PATCH',
      url: `${process.env.NEXT_PUBLIC_PATH}/responseComment`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        idArticle: idArticle,
        idUserComment: idUserComment,
        idUser: idUser,
        content: textComment,
      }),
    });
  } catch (e) {
    return e;
  }
};
