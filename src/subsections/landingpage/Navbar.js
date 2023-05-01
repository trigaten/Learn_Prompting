import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Navbar(props) {
  const leftLinks = [
    {
      name: "Learn",
      link: "/docs/intro",
    },
    {
      name: "Competition",
      link: "#competition",
    },
    {
      name: "Contribute",
      link: "/contribute",
    },
    {
      name: "Newsletter",
      link: "#newsletter",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const rightLinks = [
    {
      name: "Discord",
      link: "http://discord.gg/learn-prompting",
    },
    {
      name: "GitHub",
      link: "https://github.com/trigaten/Learn_Prompting",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/learnprompting",
    },
    {
      name: "Contact",
      link: "mailto:learnprompting@gmail.com",
    },
  ];

  const paddingClass = props.forDocs ? "py-0" : "py-12";
  return (
    <ClassicPadding>
      <div className={`md:flex hidden justify-between ${paddingClass}`}>
        {!props.forDocs && (
          <div className="flex">
            {leftLinks.map((link, idx) => (
              <a
                href={link.link}
                className="text-default hover:text-dark/500 transition-all text-sm font-light font-vietnam mr-8 tracking-tight"
                key={idx}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
        {!props.forDocs && (
          <div className="flex gap-4">
            {rightLinks.map((link, idx) => (
              <div
                className="flex items-center text-default hover:text-dark/500"
                key={idx}
              >
                <a
                  href={link.link}
                  className=" transition-all text-sm font-light mr-1 font-vietnam tracking-tight"
                  style={{ color: "black" }}
                >
                  {link.name}
                </a>
                <RxArrowTopRight className="inline-block" />
              </div>
            ))}
          </div>
        )}
      </div>
    </ClassicPadding>
  );
}

export default Navbar;
