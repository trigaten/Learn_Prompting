import React from "react";
import ClassicPadding from "./layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Footer() {
  const rightLinks = [
    {
      name: "Punkový Digitál",
      link: "https://punkovydigital.cz/",
    },
    {
      name: "shh.agency",
      link: "https://www.shh.agency/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/shh_agency/",
    },
    {
      name: "Kontakt",
      link: "mailto:hello@shh.agency",
    },
  ];

  return (
    <ClassicPadding className="bg-gray-100 py-12 sm:py-16 border-t-[gray/200] border flex flex-col sm:flex-row justify-between font-vietnam tracking-tight text-default">
      <div className="hidden sm:flex">© 2023 Learn Prompting (Český AIPE)</div>
      <div className="flex gap-4">
        {rightLinks.map((link, idx) => (
          <div
            className="flex items-center text-default hover:text-dark/500"
            key={idx}
          >
            <a
              href={link.link}
              className="transition-all mr-1 font-vietnam tracking-tight"
              style={{ color: "black" }}
            >
              {link.name}
            </a>
            <RxArrowTopRight className="inline-block" />
          </div>
        ))}
      </div>
      <div className="flex sm:hidden mt-4 sm:mt-0">© 2023 Česky AI</div>
    </ClassicPadding>
  );
}

export default Footer;
