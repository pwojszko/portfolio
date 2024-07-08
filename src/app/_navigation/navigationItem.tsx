import { Section } from "@/contexts/SectionNavContext";
import classNames from "classnames";

type NavigationItemProps = {
  title: string;
  sectionId: Section;
  isActive?: boolean;
  setCurrentSection: (section: Section) => void;
};

export const NavigationItem = ({
  title,
  isActive,
  sectionId,
  setCurrentSection,
}: NavigationItemProps) => {
  return (
    <li className="group">
      <button
        onClick={() => setCurrentSection(sectionId)}
        className={classNames("flex place-items-center gap-2", {
          "text-white -translate-x-4 duration-150": isActive,
          "text-gray -translate-x-16 group-hover:text-white duration-150":
            !isActive,
        })}
      >
        <div
          className={classNames("relative w-16 h-1 bg-gray overflow-hidden", {
            "bg-white": isActive,
            "group-hover:w-16  group-hover:bg-white": !isActive,
          })}
        />
        {title}
      </button>
    </li>
  );
};
