import { createContext, useContext, useState } from 'react';
import { getUser } from '../../services/users';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );
  const context = { user, setUser };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a userProvider');
  }
  return context;
};

export { UserProvider, useUser };
