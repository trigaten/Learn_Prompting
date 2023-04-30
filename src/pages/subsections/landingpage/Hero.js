import React, { useEffect, useMemo } from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import Button from "@site/src/components/Button";
import { RxArrowTopRight } from "react-icons/rx";
import ButtonField from "@site/src/components/ButtonField";
import BeginnerWeb from "@site/static/img/beginnerweb.svg";
import IntermediateWeb from "@site/static/img/intermediateweb.svg";
import AdvancedWeb from "@site/static/img/advancedweb.svg";
import ApplicationsWeb from "@site/static/img/applicationsweb.svg";

function Hero() {
  const categories = ["Beginner", "Intermediate", "Advanced", "Applications"];
  const [activeCategory, setActiveCategory] = React.useState("Beginner");

  const x_pos = React.useMemo(() => {
    switch (activeCategory) {
      case "Beginner":
        return "left-1";
      case "Intermediate":
        return "left-2";
      case "Advanced":
        return "left-3";
      case "Applications":
        return "left-4";
    }
  }, [activeCategory]);

  const x_pos_mob = React.useMemo(() => {
    switch (activeCategory) {
      case "Beginner":
        return "left-1-mobile";
      case "Intermediate":
        return "left-2-mobile";
      case "Advanced":
        return "left-3-mobile";
      case "Applications":
        return "left-4-mobile";
    }
  }, [activeCategory]);

  return (
    <ClassicPadding className={"pb-10"}>
      <div className="text-center text-3xl md:text-7xl font-vietnam md:font-medium font-semibold tracking-tighter lg:px-8 2xl:px-32 pt-8" style={{color:"black"}}>
        Your Guide to Communicating with Artificial Intelligence
      </div>
      <div className="text-center text-default text-sm font-vietnam font-light tracking-tighter px-4 md:px-10 lg:px-20 xl:px-60 pt-8">
        Learn how to use ChatGPT and other AI tools to accomplish your goals
        using our free {window.innerWidth >= 768 && <br />}
        and open source curriculum, designed for all skill levels!
      </div>

      <div className="flex items-center justify-center pt-6">
        <Button
          onClick={() => window.location.replace("/docs/intro")}
          text={"Start Learning"}
          icon={
            <RxArrowTopRight
              className="inline-block text-white"
              style={{ verticalAlign: "middle" }}
            />
          }
        />
      </div>
      <div className="flex flex-col items-center pt-16 z-10 overflow-hidden md:overflow-visible">
        <div className="flex flex-row flex-wrap gap-4 md:gap-4 justify-center z-[2]" style={{color:"black"}}>
          {categories.map((category, i) => (
            <ButtonField
              key={i}
              text={category}
              isActive={category == activeCategory}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        <div className="relative h-[700px] hidden md:flex">
          <div
            className={`mt-[-25px] absolute top-0 hidden md:flex   border-black flex-row transition-all ${x_pos}`}
          >
            <BeginnerWeb className="h-[700px] mr-[-10rem]"/>
            <IntermediateWeb className="h-[700px] mr-[-10rem]"/>
            <AdvancedWeb className="h-[700px] mr-[-10rem]" />
            <ApplicationsWeb className="h-[700px] mr-[-10rem]" />
          </div>
        </div>

        <div className="relative h-[700px] md:hidden w-screen">
          <div
            className={
              "left-0 absolute top-0 h-full flex flex-row transition-all " +
              x_pos_mob
            }
          >
            <img
              src={require("@site/src/css/beginnermobile.png").default}
              className="h-[650px] mr-[0rem]"
            />
            <img
              src={require("@site/src/css/intermediatemobile.png").default}
              className="h-[650px] mr-[0rem]"
            />
            <img
              src={require("@site/src/css/advancedmobile.png").default}
              className="h-[650px] mr-[0rem]"
            />
            <img
              src={require("@site/src/css/applicationsmobile.png").default}
              className="h-[650px] mr-[0rem]"
            />
          </div>
        </div>
      </div>
    </ClassicPadding>
  );
}

export default Hero;
