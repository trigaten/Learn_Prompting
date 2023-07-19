import React from "react";

function LPImage({ src, alt, caption }) {
  return (
    <div className="w-full md:w-1/2">
      <LazyLoadImage src={src} alt={alt} className=" md:ml-0"/>
      <div className="text-default text-sm md:text-base font-medium md:pr-10 tracking-tight pt-4  text-center md:text-left">
        <span className="font-bold text-dark/500">DALL·E 2 </span> {caption}
      </div>
    </div>
  );
}

export default LPImage;
