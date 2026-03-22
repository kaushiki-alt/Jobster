import type { User } from "@/types"
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "@/utils/localStorage";
import React, { createContext, useContext, useState } from 'react';


type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    clearUser: () => void;
    isSidebarOpen : boolean;
    toggleSidebar : () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUserState] = useState<User | null>(getUserFromLocalStorage());
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    const setUser = (user : User | null) => {
        if (user) {
            addUserToLocalStorage(user);
        }
        setUserState(user);
    }

     const clearUser = () => {
    removeUserFromLocalStorage();
    setUserState(null);
  };

  return (
    <UserContext.Provider value={{user, setUser, clearUser, isSidebarOpen, toggleSidebar}}>
        {children}
    </UserContext.Provider>
  )
}


export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};