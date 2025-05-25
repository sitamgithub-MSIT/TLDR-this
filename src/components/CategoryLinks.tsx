import React from "react";
import {
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconWriting,
  IconMoodSmile,
  IconHeart,
} from "@tabler/icons-react";
import Link from "next/link";

const categories = [
  { icon: IconBriefcase, label: "Business" },
  { icon: IconSchool, label: "Education" },
  { icon: IconBulb, label: "Creative" },
  { icon: IconHeart, label: "Health" },
  { icon: IconWriting, label: "Journaling" },
  { icon: IconMoodSmile, label: "Communication" },
];

/**
 * Renders a list of category links with icons as a React functional component.
 * @returns {JSX.Element} A div containing a series of anchor tags, each representing a category with an icon and label.
 */
const CategoryLinks: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20">
      {categories.map(({ icon: Icon, label }) => (
        <Link
          key={label}
          className="m-1 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          href="/"
        >
          <Icon size={18} />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryLinks;
