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
  const categories = ["Začátečníci", "Středně Pokročilí", "Pokročilí", "Aplikace"];
  const [activeCategory, setActiveCategory] = React.useState("Začátečníci");

  const x_pos = React.useMemo(() => {
    switch (activeCategory) {
      case "Začátečníci":
        return "left-1";
      case "Středně Pokročilí":
        return "left-2";
      case "Pokročilí":
        return "left-3";
      case "Aplikace":
        return "left-4";
    }
  }, [activeCategory]);

  const x_pos_mob = React.useMemo(() => {
    switch (activeCategory) {
      case "Začátečníci":
        return "left-1-mobile";
      case "Středně Pokročilí":
        return "left-2-mobile";
      case "Pokročilí":
        return "left-3-mobile";
      case "Aplikace":
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
          Váš průvodce komunikací s umělou inteligencí
        </div>
        <div className="text-center text-default text-sm font-vietnam font-light tracking-tighter px-4 md:px-10 lg:px-20 xl:px-60 pt-8">
          Naučte se používat ChatGPT a další nástroje umělé inteligence k dosažení svých cílů pomocí našeho bezplatného výukového programu s otevřeným zdrojovým kódem, který je určen pro všechny úrovně dovedností!
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="/docs/intro">
            <Button
              onClick={() =>
                React.useEffect(() => {
                  window.location.replace("/docs/intro");
                }, [])
              }
              text={"Začněte se učit"}
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
                  category === "Středně Pokročilí"
                    ? "bg-yellow-500"
                    : category === "Pokročilí"
                    ? "bg-red-500"
                    : category === "Aplikace"
                    ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
                    : ""
                }
              />
            ))}
          </div>

          <div className="relative h-[700px] hidden md:flex">
            <div
              className={`mt-[-25px] absolute top-0 hidden md:flex   border-black flex-row transition-all ${x_pos}`}
            >
              <BeginnerWeb className="h-[700px] mr-[-10rem]" />
              <IntermediateWeb className="h-[700px] mr-[-10rem]" />
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
      </div>
    </div>
  );
}

export default Hero;
