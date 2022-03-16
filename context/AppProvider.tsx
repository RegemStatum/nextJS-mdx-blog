import React, { FC, createContext, useContext, useState } from "react";

const defaultContextValue = {
  isSidebarOpen: false,
  toggleSidebarOpen: () => {},
  closeSidebar: () => {},
};

const AppContext = createContext(defaultContextValue);

export const AppProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen((prevValue) => !prevValue);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebarOpen, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
