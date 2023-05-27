"use client";
import React from "react";
import Link from "next/link";


const ComponentLinks = ({ components }) => {


  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="included_main mt-2 flex flex-col gap-2">
      <ul>
        {components?.map((item, id) => (
          <li>
            <Link
              href={`#${item.href}`}
              scroll={false}
              className="cursor-pointer text-sm text-gray-400 duration-200 hover:text-gray-800"
              key={id}
            >
              <span onClick={() => handleClick(item.href)}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentLinks;
