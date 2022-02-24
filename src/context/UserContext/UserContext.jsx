import { createContext, useContext, useState } from 'react';
import { getUser } from '../../services/users';

export const userContext = createContext();

const userProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );
  const context = { user, setUser };
  return (
    <userContext.Provider value={context}>{children}</userContext.Provider>
  );
};
const useUser = () => {
  const context = useContext();
  if (context === undefined) {
    throw new Error('useUser must be used within a userProvider');
  }
  return context;
};

export { userProvider, useUser };
