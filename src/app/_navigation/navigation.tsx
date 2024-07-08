"use client";

import { scrollToSection } from "@/utils/scrollToSection";
import { NavigationItem } from "./navigationItem";
import { Section, useSectionsNav } from "@/contexts/SectionNavContext";

export const Navigation = () => {
  const { currentSection, setCurrentSection } = useSectionsNav();

  const handleScroll = (section: Section) => {
    scrollToSection(section);
    setCurrentSection(section);
  };

  return (
    <nav className="sticky top-4">
      <ul>
        <NavigationItem
          title="Section 1"
          sectionId="section1"
          isActive={currentSection === "section1"}
          setCurrentSection={handleScroll}
        />
        <NavigationItem
          title="Section 2"
          sectionId="section2"
          isActive={currentSection === "section2"}
          setCurrentSection={handleScroll}
        />
        <NavigationItem
          title="Section 3"
          sectionId="section3"
          isActive={currentSection === "section3"}
          setCurrentSection={handleScroll}
        />
        <NavigationItem
          title="Section 4"
          sectionId="section4"
          isActive={currentSection === "section4"}
          setCurrentSection={handleScroll}
        />
        <NavigationItem
          title="Section 5"
          sectionId="section5"
          isActive={currentSection === "section5"}
          setCurrentSection={handleScroll}
        />
      </ul>
    </nav>
  );
};
