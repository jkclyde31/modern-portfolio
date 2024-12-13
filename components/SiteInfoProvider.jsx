'use client';

import { createContext, useContext } from 'react';
import { siteInfo } from '@/config/siteInfo';

const SiteInfoContext = createContext(siteInfo);

export const SiteInfoProvider = ({ children }) => {
  return (
    <SiteInfoContext.Provider value={siteInfo}>
      {children}
    </SiteInfoContext.Provider>
  );
};

export const useSiteInfo = () => {
  return useContext(SiteInfoContext);
};