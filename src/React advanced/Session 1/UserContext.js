import React, { createContext, useContext, useState } from 'react';

/**
 * UserContext (React Advanced - Q3)
 * 
 * Context to store and provide the logged-in user's profile across
 * the component tree without having to pass props through intermediate
 * components (avoiding prop drilling).
 */
export const UserContext = createContext(null);

// Preset dummy user profiles for interactive testing
export const USERS_DATA = [
  {
    id: 1,
    name: "Mamta Chavda",
    username: "mamta_creates",
    role: "Lead Developer",
    badge: "VIP Creator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    username: "rahul_codes",
    role: "Fullstack Engineer",
    badge: "Pro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"
  },
  {
    id: 3,
    name: "Priya Patel",
    username: "priya_ux",
    role: "UI/UX Designer",
    badge: "Top Contributor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80"
  }
];

/**
 * UserProvider Component
 * Wraps any component tree and supplies the user state & updater functions.
 */
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(USERS_DATA[0]);

  // Switch to a different user
  const switchUser = (userId) => {
    const selected = USERS_DATA.find((u) => u.id === userId);
    if (selected) {
      setCurrentUser(selected);
    }
  };

  // Update user details
  const updateUserData = (updatedFields) => {
    setCurrentUser((prev) => ({ ...prev, ...updatedFields }));
  };

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        usersList: USERS_DATA,
        switchUser,
        updateUserData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom Hook: useUser
 * Simplifies consuming UserContext with error validation.
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider or UserContext.Provider");
  }
  return context;
};

export default UserContext;
