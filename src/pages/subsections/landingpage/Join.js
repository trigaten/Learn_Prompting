import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import StatPoint from "@site/src/components/StatPoint";
import LargeCallout from "@site/src/components/layouts/LargeCallout";
import Button from "@site/src/components/Button";
import { RxArrowTopRight } from "react-icons/rx";
import ScrollingText from "@site/src/components/ScrollingText";
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

function Join() {
  const stats = [
    {
      header: "650K+",
      subtitle: "People Learning",
    },
    {
      header: "35K+",
      subtitle: "Discord Members",
    },
    {
      header: "60+",
      subtitle: "Content Modules",
    },
    {
      header: "9+",
      subtitle: "Languages",
    },
  ];
  const brands = [
    { name: "scale", link: "" },
    { name: "humanloop", link: "" },
    { name: "snorkel", link: "" },
    { name: "preamble", link: "" },
  ];
  return (
    <div className="w-screen font-vietnam">
      <ClassicPadding>
        <div className="text-center text-2xl md:text-5xl font-vietnam font-semibold md:font-medium tracking-tighter px-4 md:px-32 pt-20">
          Join our global community. Elevate your prompting skills.
          <div className="text-center text-default text-sm font-vietnam font-light tracking-tight px-4 md:px-28 pt-10">
            Become part of a worldwide network of learners from various
            industries, all mastering the skill of effectively engaging with AI
            using our curriculum
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between px-12 text-transparent bg-clip-text bg-gradient-to-r from-[#005046] to-[#027F75] pt-16 pb-10">
          {stats.map((stat, i) => (
            <StatPoint key={i} header={stat.header} subtitle={stat.subtitle} />
          ))}
        </div>
      </ClassicPadding>
      <LargeCallout className={"pt-20 tracking-tighter"}>
        <div
          id={"competition"}
          className="flex gap-4 justify-around flex-col md:flex-row"
        >
          <div className="md:w-[45%] md:pl-28 md:ml-12">
            <div className="opacity-81 text-center md:text-left text-lg">
              Introducing The
            </div>
            <div className="mt-8 text-4xl tracking-tighter text-center md:text-left">
              <span className="font-bold">HackAPrompt</span> Competition
            </div>
            <div className="opacity-70 font-light pt-8 md:text-left text-center px-4 md:px-0 leading-6">
              A beginner-friendly competition that will challenge you to beat 7
              levels of prompt hacking defenses. Inject, leak and defeat the
              sandwich defense to claim your share of over $37,500 in prizes.
              Ready to trick the AI? Hack our prompts anytime between May 5th
              and May 26th!
            </div>
            <div className="flex pt-8 justify-center md:justify-start">
              <Button
                onClick={() =>
                  window.open(
                    "https://www.aicrowd.com/challenges/hackaprompt-2023",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
                text={"Register Now"}
                type={"white"}
                icon={
                  <RxArrowTopRight
                    className="inline-block text-green/300"
                    style={{ position: "relative", top: "3px" }}
                  />
                }
              />
            </div>
          </div>
          <div
            className="w-[550px] h-[325px] mr-[-100px] md:flex hidden"
            style={{ paddingTop: "20px" }}
          >
            <img
              src={require("@site/static/img/lock.png").default}
              alt="Example banner"
            />
          </div>
        </div>
        <div className="pt-20">
          <ScrollingText values={brands} />
          <div className="text-center opacity-80 font-medium pt-8 pb-8 text-xs md:text-lg">
            Proudly Sponsored by Industry-Defining AI Companies
          </div>
        </div>
      </LargeCallout>
    </div>
  );
}

export default Join;
