import React, { useEffect, useState } from "react";
import "framer-motion";
import "./index.css";
import "./App.css";
import Navbar from "../subsections/landingpage/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [circles, setCircles] = useState(Array.from({ length: 100 }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) => prevCircles.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gray-300 relative overflow-hidden">
        <Navbar />
        <div className="mx-32 my-10">
          <div className="relative">
            <h1 className="text-5xl font-bold mb-10 text-center">Our mission is to elucidate Generative AI</h1>
            {circles.map((_, i) => (
              <div
                key={i}
                className="fading-circle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `fade 2s ${i * 0.1}s forwards`,
                }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center">
              <img src={require("@site/static/team/sander.jpeg").default} alt="CEO" className="mx-auto rounded-full border-2 border-gray-300 shadow-lg"/>
              <h2 className="text-xl font-semibold mt-2">CEO</h2>
            </div>
            <div className="text-center">
              <img src={require("@site/static/team/sander.jpeg").default} alt="COO" className="mx-auto rounded-full border-2 border-gray-300 shadow-lg"/>
              <h2 className="text-xl font-semibold mt-2">COO</h2>
            </div>
            <div className="text-center">
              <img src={require("@site/static/team/sander.jpeg").default} alt="CTO" className="mx-auto rounded-full border-2 border-gray-300 shadow-lg"/>
              <h2 className="text-xl font-semibold mt-2">CTO</h2>
            </div>
          </div>
          <p className="mt-10">
            We are a platform for teaching and learning about prompt engineering. We maintain the most robust, beginner friendly course of prompt engineering.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;