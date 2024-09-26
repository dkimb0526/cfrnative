import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [energyUsage, setEnergyUsage] = useState(
    Array(12).fill({
      homeUsage: '',
      driveUsage: '',
      trashUsage: ''
    })
  );

  return (
    <DataContext.Provider value={{ energyUsage, setEnergyUsage }}>
      {children}
    </DataContext.Provider>
  );
};
