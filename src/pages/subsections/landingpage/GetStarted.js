import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";
import Button from "@site/src/components/Button";

function GetStarted() {
  return (
    <ClassicPadding
      className={"flex flex-col md:flex-row gap-4 justify-between py-24"}
    >
      <div className="flex items-center md:w-[60%]">
        <div className="text-center md:text-left text-6xl md:text-5xl font-vietnam font-medium tracking-tighter  pt-20">
          Get Started.
          <div className="text-center md:text-left text-default text-sm font-vietnam font-light tracking-tight pt-4 px-12 md:px-0">
            Join the 650K learners mastering the skill of communicating with AI
          </div>
          <div className="flex justify-center md:justify-start pt-12 text-[1rem] tracking-tighter mb-12">
            <Button
              onClick={() =>
                window.location.replace(
                  "/docs/intro"
                )
              }
              text={"Start Learning"}
              icon={<RxArrowTopRight className="inline-block text-white" />}
            />
          </div>
        </div>
      </div>
      <img
      src={require('@site/static/img/astronaut.png').default}
      alt="Example banner"
    />
    </ClassicPadding>
  );
}

export default GetStarted;
