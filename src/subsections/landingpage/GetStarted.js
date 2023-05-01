import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";
import Button from "@site/src/components/Button";

function GetStarted() {
  return (
    <ClassicPadding className="flex flex-col md:flex-row gap-4 justify-between md:py-24">
      <div className="items-center md:w-[60%]">
        <div className="text-center md:text-left text-5xl md:text-6xl font-vietnam font-medium tracking-tighter pt-16">
          <span style={{ color: "black" }}>Get Started.</span>
          <div className="text-center md:text-left text-default text-base font-vietnam font-light tracking-tight pt-4 px-12 md:px-0">
            Join 700K+ learners mastering the skill of communicating with AI
          </div>
          <div className="flex justify-center md:justify-start pt-8 text-[1rem] tracking-tighter mb-12 mt-1">
            <a href="https://learnprompting.org/docs/intro"><Button
              onClick={() => 
                React.useEffect(() => {
                  window.location.replace("/docs/intro")
                }, [])
            }
              text={"Start Learning"}
              icon={
                <RxArrowTopRight
                  className="inline-block text-white"
                  style={{ verticalAlign: "middle" }}
                />
              }
            /></a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center">
        <img
          src={require("@site/static/img/sitting_astronaut.png").default}
          className="mx-auto md:ml-[80px] md:h-auto h-[300px]"
        />
      </div>
    </ClassicPadding>
  );
}

export default GetStarted;
