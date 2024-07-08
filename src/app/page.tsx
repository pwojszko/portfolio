"use client";

import { ContentItem } from "./_contentItem/contentItem";
import { Header } from "./_header/header";
import { SectionsNavProvider } from "@/contexts/SectionNavContext";

export default function Home() {
  return (
    <SectionsNavProvider>
      <Header />

      <main className="flex-1 p-4">
        <div className="flex flex-col gap-16">
          <ContentItem section="section1" />
          <ContentItem section="section2" />
          <ContentItem section="section3" />
          <ContentItem section="section4" />
          <ContentItem section="section5" />
        </div>
      </main>
    </SectionsNavProvider>
  );
}
