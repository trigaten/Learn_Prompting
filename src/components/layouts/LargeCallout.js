import React from "react";

function LargeCallout({ children, className }) {
  return (
    <div className={"w-full flex items-center justify-center"}>
      <div
        className={
          "largecallout rounded-2xl w-[95%] p-10 m-10 text-white" +
          " " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}

export default LargeCallout;
