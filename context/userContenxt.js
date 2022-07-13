import { createContext, useState } from 'react';

export const User = createContext({
  user: null,
  updateUser: (data) => {},
  clearUser: () => {},
});

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  // update user
  const updateUser = (data) => {
    setUser({ ...data });
  };

  // clear user
  const clearUser = () => {
    setUser(null);
  };

  return (
    <User.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </User.Provider>
  );
};

export default UserContext;
