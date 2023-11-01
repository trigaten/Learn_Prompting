import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";
import { Transition } from "@headlessui/react";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        dropdownRef.current.style.height = `${dropdownRef.current.scrollHeight}px`;
      } else {
        dropdownRef.current.style.height = "0px";
      }
    }
  }, [isOpen]);

  const leftLinks = [
    {
      name: "Learn",
      link: "/docs/intro",
    },
    {
      name: "About",
      link: "/about",
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
      name: "Our Services",
      link: "/our_services",
    },
    {
      name: "Certificate",
      link: "/certificate",
    },
  ];

  const rightLinks = [
    {
      name: "Discord",
      link: "https://discord.gg/learn-prompting-1046228027434086460",
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
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/learn-prompting",
    },
    {
      name: "Contact",
      link: "mailto:team@learnprompting.org",
    },
  ];

  const paddingClass = props.forDocs ? "py-0" : "py-12";
  return (
    <div className={"px-4 md:px-20 2xl:px-96"}>
      {/* hamburger */}
      {!props.forDocs && (
        <div className={`flex md:hidden justify-end items-start pt-4`}>
          <nav
            ref={dropdownRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:block ${
              isOpen ? "block" : "hidden"
            }`}
            style={{ height: 0 }}
          >
            <ul className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4 list-none">
              {leftLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.link} className="text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {!props.forDocs && (
          <button onClick={toggleMenu} className=" lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
          )}
        </div>
      )}

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
          <div className="flex gap-4 hidden lg:flex">
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
    </div>
  );
}

export default Navbar;