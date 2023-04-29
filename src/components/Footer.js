import React from "react";
import ClassicPadding from "./layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Footer() {
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
              style={{color:"black"}}
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
