"use client";

import { createContext, useContext, useState } from "react";

export type Section =
  | "section1"
  | "section2"
  | "section3"
  | "section4"
  | "section5";

const SectionsNavContext = createContext({
  currentSection: "section1" as Section,
  setCurrentSection: (section: Section) => {},
});

export const useSectionsNav = () => {
  return useContext(SectionsNavContext);
};

export const SectionsNavProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState<Section>("section1");

  return (
    <SectionsNavContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionsNavContext.Provider>
  );
};
