import React, { FC, createContext, useContext, useState } from "react";

const defaultContextValue = {
  isSidebarOpen: false,
  toggleSidebarOpen: () => {},
};

const AppContext = createContext(defaultContextValue);

export const AppProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen((prevValue) => !prevValue);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
