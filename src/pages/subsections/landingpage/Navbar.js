import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Navbar() {
  const leftLinks = [
    {
      name: "Learn",
      link: "",
    },
    {
      name: "Competition",
      link: "",
    },
    {
      name: "Contribute",
      link: "",
    },
    {
      name: "FAQ",
      link: "",
    },
    {
      name: "Newsletter",
      link: "",
    },
  ];

  const rightLinks = [
    {
      name: "Discord",
      link: "",
    },
    {
      name: "GitHub",
      link: "",
    },
    {
      name: "Twitter",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
  ];
  return (
    <ClassicPadding>
      <div className="md:flex hidden justify-between py-12">
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
        <div className="flex gap-4">
          {rightLinks.map((link, idx) => (
            <div
              className="flex items-center text-default hover:text-dark/500"
              key={idx}
            >
              <a
                href={link.link}
                className=" transition-all text-sm font-light mr-1 font-vietnam tracking-tight"
              >
                {link.name}
              </a>
              <RxArrowTopRight className="inline-block" />
            </div>
          ))}
        </div>
      </div>
    </ClassicPadding>
  );
}

export default Navbar;
