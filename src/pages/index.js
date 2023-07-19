import React from "react";
import "framer-motion";
import "./index.css";
import "./App.css";
import Navbar from "../subsections/landingpage/Navbar";
import Hero from "../subsections/landingpage/Hero";
import Join from "../subsections/landingpage/Join";
import FAQ from "../subsections/landingpage/FAQ";
import Newsletter from "../subsections/landingpage/Newsletter";
import GetStarted from "../subsections/landingpage/GetStarted";
import Footer from "../components/Footer";
import Banner from "../subsections/landingpage/Banner";

function Home() {
  return (
    <>
      {/*<Banner />*/}
      <div className="bg-gray/300">
        <Navbar />
        <Hero />
        <Join />
        <FAQ />
        <Newsletter />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default Home;
