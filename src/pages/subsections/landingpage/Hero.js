import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import Button from "@site/src/components/Button";
import { RxArrowTopRight } from "react-icons/rx";
import ButtonField from "@site/src/components/ButtonField";
import Code from "@site/src/css/code_snippet_1.svg";
import Phone from "@site/src/css/phonelp.svg";

function Hero() {
  const categories = ["Beginner", "Intermediate", "Advanced", "Applications"];

  return (
    <ClassicPadding className={"pb-12"}>
      <div className="text-center text-3xl md:text-7xl font-vietnam md:font-medium font-semibold tracking-tighter md:px-8 pt-16">
        Your Guide to Communicating with Artifical Intelligence
        <div className="text-center text-default text-sm font-vietnam font-light tracking-tight px-10 md:px-10 lg:px-28 pt-10">
          Learn how to use ChatGPT and other AI tools to accomplish your goals
          using our free and open source curriculum, designed for all skill
          levels!
        </div>
      </div>
      <div className="flex items-center justify-center pt-6">
        <Button
          text={"Start Learning"}
          icon={<RxArrowTopRight className="inline-block text-white" />}
        />
      </div>
      <div className="flex flex-row gap-4 justify-center pt-10 z-10">
        {categories.map((category, i) => (
          <ButtonField
            key={i}
            text={category}
            isActive={i == 0}
            onClick={() => alert("TBD")}
          />
        ))}
      </div>
      <div className="pt-4 mt-2 hidden md:flex">
        <Code className="h-[700px]" />
      </div>
      <div className="pt-4 mt-2 md:hidden">
        <Phone className="w-screen" />
      </div>
    </ClassicPadding>
  );
}

export default Hero;
