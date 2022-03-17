import React, { FC, createContext, useContext, useState } from "react";

const defaultContextValue = {
  isSidebarOpen: false,
  toggleSidebarOpen: () => {},
  closeSidebar: () => {},
  categories: [""],
};

const AppContext = createContext(defaultContextValue);

const CATEGORIES = ["Javascript", "NextJs", "React", "Typescript"];

export const AppProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState(CATEGORIES);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen((prevValue) => !prevValue);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebarOpen, closeSidebar, categories }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
