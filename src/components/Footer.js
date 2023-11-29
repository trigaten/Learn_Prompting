import React from "react";
import ClassicPadding from "./layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";

function Footer() {
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

  return (
    <ClassicPadding className="bg-gray-100 py-12 sm:py-16 border-t-[gray/200] border flex flex-col sm:flex-row justify-between font-vietnam tracking-tight text-default">
      <div className="hidden sm:flex">© 2023 Learn Prompting | <a href="http://learnprompting.org/privacy_policy">Privacy Policy</a> | <a href="http://learnprompting.org/terms_of_service">Terms of Use</a> </div>
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
      <div className="flex sm:hidden mt-4 sm:mt-0">© 2023 Learn Prompting | <a href="http://learnprompting.org/privacy_policy">Privacy Policy</a> | <a href="http://learnprompting.org/terms_of_service">Terms of Use</a></div>
    </ClassicPadding>
  );
}

export default Footer;
