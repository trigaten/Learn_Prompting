import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import StatPoint from "@site/src/components/StatPoint";
import LargeCallout from "@site/src/components/layouts/LargeCallout";
import Button from "@site/src/components/Button";
import { RxArrowTopRight } from "react-icons/rx";
import Arthur from "@site/static/img/arthur_logo.png";
import HuggingFace from "@site/static/img/huggingface_logo.png";
import HumanLoop from "@site/static/img/humanloop_logo.png";
import Preamble from "@site/static/img/preamble_logo.png";
import Scale from "@site/static/img/scale_logo.png";
import Snorkel from "@site/static/img/snorkel_logo.png";
import Stability from "@site/static/img/stability_logo.png";
import Towards from "@site/static/img/towards_logo.png";
import Trustible from "@site/static/img/trustible_logo.png";
import Voiceflow from "@site/static/img/voiceflow_logo.png";
import FiscalNote from "@site/static/img/fiscalnote_logo.png";
import OpenAI from "@site/static/img/openai_logo.png";

function Join() {
  const stats = [
    {
      header: "100+",
      subtitle: "Studentů",
    },
    {
      header: "150+",
      subtitle: "AI nástrojů",
    },
    {
      header: "60+",
      subtitle: "Bezplatných modulů",
    },
    {
      header: "3",
      subtitle: "Placené kurzy",
    },
  ];

  const brands = [
    { name: "Scale", logo: Scale, link: "https://scale.com/" },
    { name: "OpenAI", logo: OpenAI, link: "https://openai.com/" },
    { name: "Stability", logo: Stability, link: "https://stability.ai/" },
    { name: "HuggingFace", logo: HuggingFace, link: "https://huggingface.co/" },
    { name: "HumanLoop", logo: HumanLoop, link: "https://humanloop.com/" },
    { name: "Preamble", logo: Preamble, link: "https://www.preamble.com/" },
    { name: "Voiceflow", logo: Voiceflow, link: "https://www.voiceflow.com/" },
    { name: "Arthur", logo: Arthur, link: "https://www.arthur.ai/" },
    { name: "Snorkel", logo: Snorkel, link: "https://snorkel.ai/" },
    { name: "Towards", logo: Towards, link: "https://towardsai.net/" },
    { name: "Trustible", logo: Trustible, link: "https://www.trustible.ai/" },
    { name: "FiscalNote", logo: FiscalNote, link: "https://fiscalnote.com/" },
  ];

  return (
    <div className="w-screen font-vietnam">
      <div className="text-center text-2xl md:text-5xl font-vietnam font-semibold md:font-medium tracking-tighter px-4 md:px-32 md:pt-15 lg:px-[200px]">
        <span style={{ color: "black" }}>Lepší prompty.</span>
        <br />
        <span style={{ color: "black" }}>Úžasné výsledky.</span>
        <div className="text-center text-default text-sm font-vietnam font-light tracking-tight px-4 md:px-56 pt-10">
          Naučte se jak správně komunikovat nejen s ChatGPT, abyste dosahli neuvěřitelných výsledků.
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 text-transparent bg-clip-text bg-gradient-to-r from-[#005046] to-[#027F75] pt-14 pb-10 max-w-screen-xl mx-auto">
        {stats.map((stat, i) => (
          <StatPoint key={i} header={stat.header} subtitle={stat.subtitle} />
        ))}
      </div>

      <LargeCallout className={"pt-20 tracking-tighter"}>
        <div
          id={"nejvetsi-kurz"}
          className="flex gap-4 justify-around flex-col md:flex-row"
        >
          <div className="md:w-[45%] md:pl-28 md:ml-12">
            <div className="opacity-81 text-center md:text-left text-lg">
              Představujeme
            </div>
            <div className="mt-8 text-4xl tracking-tighter text-center md:text-left">
              <span className="font-bold">Největší AI kurzy</span> v češtině
            </div>
            <div className="opacity-75 font-light pt-8 md:text-left text-center px-4 md:px-0 leading-6">
              Chystáme 3 nejrozsáhlejší AI kurzy v češtině. Můžete se těšit na: 
              <br />Rozsáhlý AI kurz pro začatečníky.
              <br />AI kurz v marketingu.
              <br />AI pro žáky a studenty.
            </div>
            <div className="flex pt-8 justify-center md:justify-start">
              <a href="https://www.aicrowd.com/challenges/hackaprompt-2023">
                <Button
                  onClick={() =>
                    React.useEffect(() => {
                      window.open(
                        "https://www.shh.agency/punkovy-digital",
                        "_blank"
                      );
                    }, [])
                  }
                  text={"Přihlásit se"}
                  type={"white"}
                  icon={
                    <RxArrowTopRight
                      className="inline-block text-green/300"
                      style={{ position: "relative", top: "3px" }}
                    />
                  }
                />
              </a>
            </div>
          </div>
          <div
            className="w-[550px] h-[325px] mr-[-100px] md:flex hidden"
            style={{ paddingTop: "20px", marginTop: "-20px" }}
          >
            <img
              src={require("@site/static/img/marketing-ai.webp").default}
              alt="Kurz AI v Marketingu pro Začátečníky"
            />
          </div>
        </div>
      </LargeCallout>
    </div>
  );
}

export default Join;
