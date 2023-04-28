import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";
import { FaBook } from "react-icons/fa";
import { RiBracesFill, RiSuitcaseFill } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { BsPencilFill } from "react-icons/bs";
import BulletPoint from "@site/src/components/BulletPoint";
function FAQ() {
  const leftFaq = [
    {
      icon: <FaBook className="inline-block text-dark/500 text-lg mb-1" />,
      header: "Is this curriculum free?",
      subtitle:
        "Yes, it is completely free and open source. We do not charge for any of the content on this website.",
    },
    {
      icon: (
        <RiBracesFill className="inline-block text-dark/500 text-lg mb-1" />
      ),
      header: "Do I need to know how to code?",
      subtitle:
        "Nope! However, coding is a great skill to learn alongside prompt engineering. We recommend learning Python, as it is a popular language for AI and machine learning.",
    },
    {
      icon: (
        <TbCertificate className="inline-block text-dark/500 text-xl mb-1" />
      ),
      header: "When is the certificate being released?",
      subtitle:
        "It is coming soon! Be among the first to access the certification program as soon as it launches by joining our newsletter below.",
    },
  ];
  const rightFaq = [
    {
      icon: <FiLayers className="inline-block text-dark/500 text-lg mb-1" />,
      header: "Do I need previous experience?",
      subtitle:
        "Nope! This course is designed to be accessible to everyone, regardless of prior experience. ",
    },
    {
      icon: (
        <RiSuitcaseFill className="inline-block text-dark/500 text-xl mb-1" />
      ),
      header: "Is prompt engineering a real job?",
      subtitle:
        "Yes, but most prompt engineering jobs require other skills such as coding and teaching. We prefer to view it as a skill that can be used in many different professions.",
    },
    {
      icon: (
        <BsPencilFill className="inline-block text-dark/500 text-lg mb-1" />
      ),
      header: "Can I help add to the site?",
      subtitle:
        "Yes, we are always looking for more contributors! You can find more information here.",
    },
  ];
  return (
    <ClassicPadding className={"pb-24"}>
      <div className="text-left md:text-center text-3xl md:text-5xl font-vietnam font-medium tracking-tighter  md:px-32 pt-6 md:pt-20">
        Frequently Asked Questions
        <div className="md:hidden">
          <div className="text-left md:text-center text-default text-sm pt-2 font-vietnam font-light tracking-tight md:px-28 md:pt-10 md:text-md mb-4 md:mb-0 ">
            Can't find what you are looking for?{" "}
            <span className={"underline flex md:hidden"}>
              <a href={""} className="underline">
                {" "}
                Contact Us
                <span className="ml-1">
                  <RxArrowTopRight className="inline-block text-default text-md mb-1" />
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="text-left md:text-center text-default text-sm pt-2 font-vietnam font-light tracking-tight md:px-28 md:pt-10 md:text-md mb-4 md:mb-0 ">
        Can't find what you are looking for?{" "}
        <span className={"underline"}>
          <a href={""} className="underline">
            {" "}
            Contact Us
            <span className="ml-1">
              <RxArrowTopRight className="inline-block text-default text-md mb-1" />
            </span>
          </a>
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-around pt-4 md:pt-20 gap-8 md:gap-24">
        <div className="gap-8 md:gap-12 flex-col flex">
          {leftFaq.map((faq, i) => (
            <BulletPoint
              key={i}
              icon={faq.icon}
              header={faq.header}
              subtitle={faq.subtitle}
            />
          ))}
        </div>
        <div className="gap-8 md:gap-12 flex-col flex">
          {rightFaq.map((faq, i) => (
            <BulletPoint
              key={i}
              icon={faq.icon}
              header={faq.header}
              subtitle={faq.subtitle}
            />
          ))}
        </div>
      </div>
    </ClassicPadding>
  );
}

export default FAQ;
