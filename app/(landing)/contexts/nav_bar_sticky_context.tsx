"use client";

import { ReactNode, createContext, useState } from "react";

export type NavBarStickyContextType = {
  isNavBarSticky: boolean;
  setIsNavBarSticky: (value: boolean) => void;
};

export const NavBarStickyContext = createContext<NavBarStickyContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function NavBarStickyProvider({ children }: Props) {
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);

  const contextValue = {
    isNavBarSticky,
    setIsNavBarSticky,
  };
  return (
    <NavBarStickyContext.Provider value={contextValue}>{children}</NavBarStickyContext.Provider>
  );
}
