"use client";
import React from "react";
import Link from "next/link";

const ComponentLinks = ({ components }) => {
  const handleClick = (event, id) => {
    event.preventDefault();

    const sectionElement = document.getElementById(id);
    const offset = 100;

    if (sectionElement) {
      const topOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topOffset - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="included_main ml-2 mt-5 flex flex-col gap-2">
      {components?.map((item, id) => (
        <Link
          href={`/doc#${item.href}`}
          scroll={false}
          className="cursor-pointer text-sm text-gray-400 duration-200 hover:text-gray-800"
          key={id}
          onClick={(event) => handleClick(event, item.href)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default ComponentLinks;
