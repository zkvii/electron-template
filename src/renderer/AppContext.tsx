import React from 'react';

interface AppContextProps {
  selectedFolder: string | null;
  setSelectedFolder: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC = ({ children }) => {
  const [selectedFolder, setSelectedFolder] = React.useState<string | null>(
    null,
  );

  const value: AppContextProps = {
    selectedFolder,
    setSelectedFolder,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
