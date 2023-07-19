import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

function Banner() {
  return (
    <div className="banner p-4 pt-4 flex items-center flex-col md:flex-row md:justify-center">
      <div className="text-center text-xs text-white opacity-81">
        Compete in the HackAPrompt Competition until June 3rd!
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://www.aicrowd.com/challenges/hackaprompt-2023"}
      >
        <div className="flex cursor-pointer hover:underline transition-all items-center text-white font-bold tracking-tight mt-2 md:mt-0 ml-0 md:ml-3 text-sm">
          Register Now
          <span>
            <RxArrowTopRight
              className="inline-block text-white ml-1"
              style={{ position: "relative", top: "3px" }}
            />
          </span>
        </div>
      </a>
    </div>
  );
}

export default Banner;
