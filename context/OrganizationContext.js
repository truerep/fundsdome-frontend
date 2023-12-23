import { createContext, useContext } from 'react';

const OrganizationContext = createContext();

export const OrganizationProvider = ({ children, data }) => {
  return (
    <OrganizationContext.Provider value={data}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganizationContext = () => {
  return useContext(OrganizationContext);
};