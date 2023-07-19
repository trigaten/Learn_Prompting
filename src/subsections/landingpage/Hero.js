import React, { useEffect, useMemo } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from "@site/src/components/Button";
import { RxArrowTopRight } from "react-icons/rx";
import ButtonField from "@site/src/components/ButtonField";

import BeginnerWeb from "@site/static/img/beginnerweb.webp";
import IntermediateWeb from "@site/static/img/intermediateweb.webp";
import AdvancedWeb from "@site/static/img/advancedweb.webp";
import ApplicationsWeb from "@site/static/img/applicationsweb.webp";

import BeginnerMobile from "@site/static/img/beginnermobile.webp";
import IntermediateMobile from "@site/static/img/intermediatemobile.webp";
import AdvancedMobile from "@site/static/img/advancedmobile.webp";
import ApplicationsMobile from "@site/static/img/applicationsmobile.webp";

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
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <div className={"pb-10 px-4 md:px-20 lg:px-56 2xl:px-96"}>
        <div
          className="text-center text-3xl md:text-7xl font-vietnam md:font-medium font-semibold tracking-tighter lg:px-8 2xl:px-32 pt-8"
          style={{ color: "black" }}
        >
          Your Guide to Communicating with Artificial Intelligence
        </div>
        <div className="text-center text-default text-sm font-vietnam font-light tracking-tighter px-4 md:px-10 lg:px-20 xl:px-60 pt-8">
          Learn how to use ChatGPT and other AI tools to accomplish your goals
          using our free and open source curriculum, designed for all skill
          levels!
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="https://learnprompting.org/docs/intro">
            <Button
              onClick={() =>
                React.useEffect(() => {
                  window.location.replace("/docs/intro");
                }, [])
              }
              text={"Start Learning"}
              icon={
                <RxArrowTopRight
                  className="inline-block text-white"
                  style={{ verticalAlign: "middle" }}
                />
              }
            />
          </a>
        </div>
        <div className="flex flex-col items-center pt-16 z-10 overflow-hidden md:overflow-visible">
          <div
            className="flex flex-row flex-wrap gap-4 md:gap-4 justify-center z-[2]"
            style={{ color: "black" }}
          >
            {categories.map((category, i) => (
              <ButtonField
                key={i}
                text={category}
                isActive={category == activeCategory}
                onClick={() => setActiveCategory(category)}
                customStyle={
                  category === "Intermediate"
                    ? "bg-yellow-500"
                    : category === "Advanced"
                      ? "bg-red-500"
                      : category === "Applications"
                        ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
                        : ""
                }
              />
            ))}
          </div>

          <div className="relative hidden md:flex">
            <div
              className={`mt-[-25px] top-0 hidden md:flex border-black transition-all ${x_pos}`}
            >
              <LazyLoadImage src={BeginnerWeb} alt="Beginner Web" />
              <LazyLoadImage src={IntermediateWeb} alt="Intermediate Web" />
              <LazyLoadImage src={AdvancedWeb} alt="Advanced Web" />
              <LazyLoadImage src={ApplicationsWeb} alt="Applications Web" />
            </div>
          </div>

          <div className="relative  md:hidden flex">
            <div
              className={
                "left-0 top-0 h-full flex flex-row transition-all " +
                x_pos_mob
              }
            >
              <img src={BeginnerMobile} alt="Beginner Mobile" loading="lazy"/>
              <img src={IntermediateMobile} alt="Intermediate Mobile" loading="lazy"/>
              <img src={AdvancedMobile} alt="Advanced Mobile" loading="lazy"/>
              <img src={ApplicationsMobile} alt="Applications Mobile" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
