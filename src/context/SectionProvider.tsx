import { createContext, useState } from "react";

export const SectionContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
  selectedMenu: false,
  setSelectedMenu: (changed: boolean) => {},
});

function SectionProvider({ children }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(false);

  return (
    <SectionContext.Provider
      value={{ activeIndex, setActiveIndex, selectedMenu, setSelectedMenu }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
