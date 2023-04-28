import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import Button from "@site/src/components/Button";
import { RxArrowTopRight } from "react-icons/rx";
import ButtonField from "@site/src/components/ButtonField";
import Code from "@site/src/css/code_snippet_1.svg";
import Phone from "@site/src/css/phonelp.svg";
// import BeginnerMobile from "@site/src/css/beginnermobile.svg";
// import BeginnerWeb from "@site/src/css/beginnerweb.svg";
// import IntermediateMobile from "@site/src/css/intermediatemobile.svg";
// import IntermediateWeb from "@site/src/css/intermediateweb.svg";
// import AdvancedMobile from "@site/src/css/advancedmobile.svg";
// import AdvancedWeb from "@site/src/css/advancedweb.svg";
// import ApplicationsMobile from "@site/src/css/applicationsmobile.svg";
// import ApplicationsWeb from "@site/src/css/applicationsweb.svg";

function Hero() {
  const categories = ["Beginner", "Intermediate", "Advanced", "Applications"];

  return (
    <ClassicPadding className={"pb-12"}>
      <div className="text-center text-3xl md:text-7xl font-vietnam md:font-medium font-semibold tracking-tighter md:px-8 2xl:px-28 pt-16">
        Your Guide to Communicating with Artifical Intelligence
        <div className="text-center text-default text-sm font-vietnam font-light tracking-tight px-10 md:px-10 lg:px-28 pt-10">
          Learn how to use ChatGPT and other AI tools to accomplish your goals
          using our free and open source curriculum, designed for all skill
          levels!
        </div>
      </div>
      <div className="flex items-center justify-center pt-6">
        <Button
          onClick={() =>
            window.location.replace("https://learnprompting.org/docs/intro ")
          }
          text={"Start Learning"}
          icon={<RxArrowTopRight className="inline-block text-white" />}
        />
      </div>
      <div className="flex flex-row gap-4 justify-center pt-10 z-10 md:overflow-visible overflow-hidden">
        {categories.map((category, i) => (
          <ButtonField
            key={i}
            text={category}
            isActive={i == 0}
            onClick={() => alert("TBD")}
          />
        ))}
      </div>
      <div className=" mt-2 hidden md:flex">
        <Code className="h-[700px] mt-[-5%] xl:mt-[0%]" />
      </div>
      <div className="pt-4 mt-2 md:hidden">
        <Phone className="w-full" />
      </div>
    </ClassicPadding>
  );
}

export default Hero;
