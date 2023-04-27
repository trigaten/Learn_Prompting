import React from "react";
import ClassicPadding from "./layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Footer() {
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
    <ClassicPadding className="bg-gray/300 py-16 border-t-[gray/200] border flex flex-col md:flex-row justify-between font-vietnam tracking-tight text-default">
      <div className="hidden md:flex">© 2023 Learn Prompting</div>
      <div className="flex gap-4">
        {rightLinks.map((link, idx) => (
          <div
            className="flex items-center text-default hover:text-dark/500"
            key={idx}
          >
            <a
              href={link.link}
              className=" transition-all mr-1 font-vietnam tracking-tight"
            >
              {link.name}
            </a>
            <RxArrowTopRight className="inline-block" />
          </div>
        ))}
      </div>
      <div className="flex md:hidden mt-6">© 2023 Learn Prompting</div>
    </ClassicPadding>
  );
}

export default Footer;
