import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";
import { FaBookOpen } from "react-icons/fa";
import { RiBracesFill, RiSuitcaseFill } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { BsPencilFill } from "react-icons/bs";
import BulletPoint from "@site/src/components/BulletPoint";

function FAQ() {
  const leftFaq = [
    {
      icon: (
        <FaBookOpen className="align-middle inline-block text-dark/500 text-xl" />
      ),
      header: "Je tento program zdarma?",
      subtitle:
        "Ano, je zcela zdarma a s otevřeným zdrojovým kódem. Za žádný obsah na těchto webových stránkách neúčtujeme žádné poplatky.",
    },
    {
      icon: (
        <RiBracesFill className="align-middle inline-block text-dark/500 text-xl mt-1" />
      ),
      header: "Musím umět kódovat?",
      subtitle:
        "Ne! Kódování je však skvělá dovednost, kterou se můžete naučit vedle pohotového inženýrství. Doporučujeme naučit se jazyk Python, protože je to oblíbený jazyk pro umělou inteligenci a strojové učení.",
    },
    {
      icon: (
        <TbCertificate className="align-middle inline-block text-dark/500 text-2xl mt-1" />
      ),
      header: "Je ten kurz od shh.agency?",
      subtitle:
        "Ne, toto je český překlad open source bezplatného kurzu od Learn Prompting. Placené kurzy na stránkách www.shh.agency jsou od shh.agency.",
    },
  ];
  const rightFaq = [
    {
      icon: (
        <FiLayers className="align-middle inline-block text-dark/500 text-xl mt-1" />
      ),
      header: "Potřebuji předchozí zkušenosti?",
      subtitle:
        "Ne! Tento kurz je navržen tak, aby byl přístupný všem bez ohledu na předchozí zkušenosti. ",
    },
    {
      icon: (
        <RiSuitcaseFill className="align-middle inline-block text-dark/500 text-2xl mt-1" />
      ),
      header: "Je prompt inženýrství skutečnou prací?",
      subtitle:
        "Ano, ale většina pracovních míst v oblasti promptního inženýrství vyžaduje další dovednosti, jako je kódování a výuka. Raději se na něj díváme jako na dovednost, kterou lze využít v mnoha různých profesích.",
    },
    {
      icon: (
        <BsPencilFill className="align-middle inline-block text-dark/500 text-xl mt-1" />
      ),
      header: "Mohu pomoci přispět?",
      subtitle:
        "Ano, stále hledáme další přispěvatele! Více informací najdete po kliknutí na záložku přispět.",
    },
  ];
  return (
    <ClassicPadding className={"pb-24"}>
      <div
        id={"faq"}
        className="text-left md:text-center text-3xl md:text-5xl font-vietnam font-medium tracking-tighter  md:px-0 pt-6 md:pt-20"
      >
        <span style={{ color: "black" }}>Často kladené otázky</span>
      </div>
      <div className="text-left md:text-center text-default text-sm pt-2 font-vietnam font-light tracking-tight md:px-28 md:pt-4 md:text-md mb-4 md:mb-0 ">
        Nemůžete najít, co hledáte?{" "}
        <span className={"underline"}>
          <a
            href={"mailto:hello@shh.agency"}
            className="underline"
            style={{ color: "grey" }}
          >
            {" "}
            Napište nám
            <span className="ml-1">
              <RxArrowTopRight
                className="inline-block text-default text-md mt-1"
                style={{ transform: "translateY(3px)" }}
              />
            </span>
          </a>
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-around pt-4 md:pt-20 gap-8 md:gap-24">
        <div
          className="gap-8 md:gap-12 flex-col flex"
          style={{ color: "black" }}
        >
          {leftFaq.map((faq, i) => (
            <BulletPoint
              key={i}
              icon={faq.icon}
              header={faq.header}
              subtitle={faq.subtitle}
            />
          ))}
        </div>
        <div
          className="gap-8 md:gap-12 flex-col flex"
          style={{ color: "black" }}
        >
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
