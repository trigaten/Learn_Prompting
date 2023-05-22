import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Navbar(props) {
  const leftLinks = [
    {
      name: "Bezplatný program",
      link: "/docs/intro",
    },
    {
      name: "Největší AI kruz",
      link: "#nejvetsi-kurz",
    },
    {
      name: "Přispět",
      link: "/contribute",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const rightLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/shh_agency/",
    },
    {
      name: "Punkový Digitál",
      link: "https://punkovydigital.cz/",
    },
    {
      name: "Shh.agency",
      link: "https://www.shh.agency/",
    },
    {
      name: "Kontakt",
      link: "mailto:hello@shh.agency",
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
