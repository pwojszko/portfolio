"use client";
import { Section, useSectionsNav } from "@/contexts/SectionNavContext";
import useVisibilityPercentage from "@/hooks/useVisibilityPercentage";
import { useEffect, useRef } from "react";

type ContentItemProps = {
  section: Section;
};

export const ContentItem = ({ section }: ContentItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { visibilityPercentage } = useVisibilityPercentage(ref);
  const { setCurrentSection } = useSectionsNav();

  useEffect(() => {
    if (visibilityPercentage > 50) setCurrentSection(section);
  }, [visibilityPercentage, section, setCurrentSection]);

  return (
    <div ref={ref} id={section} className="min-h-screen">
      {visibilityPercentage}
    </div>
  );
};
