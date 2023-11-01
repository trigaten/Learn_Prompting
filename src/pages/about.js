import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./index.css";
import "./App.css";
import Navbar from "../subsections/landingpage/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <Navbar />
        <div className="container mx-auto py-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl font-bold mb-8 text-black">Illuminate Generative AI</h1>
          </div>
          <p className="mx-auto px-8 md:px-32 text-lg text-gray-600 leading-relaxed text-center">
            Our mission is to teach global audiences about prompt engineering and generative AI. 
          </p>
          <div className="bg-white shadow-lg rounded-lg p-8 my-10 text-black">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 ">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <LazyLoadImage src={require("@site/static/team/sander.webp").default} alt="CTO" className="mx-auto rounded-full border-4 border-gray-200 shadow-lg" style={{ width: "200px", height: "200px" }}/>
                <h2 className="text-lg md:text-xl font-semibold mt-4"><a href="https://trigaten.github.io">Sander Schulhoff</a></h2>
                <p className="text-gray-500 mt-2">CEO</p>
              </div>
              <div className="text-center">
                <LazyLoadImage src={require("@site/static/team/fady.webp").default} alt="COO" className="mx-auto rounded-full border-4 border-gray-200 shadow-lg" style={{ width: "200px", height: "200px" }}/>
                <h2 className="text-lg md:text-xl font-semibold mt-4"><a href="https://www.linkedin.com/in/fadyyanni/">Fady Yanni</a></h2>
                <p className="text-gray-500 mt-2">COO</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 my-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">Our Research</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We conduct large-scale research on the topic, such as the recent large language model security challenge, <a href="https://www.aicrowd.com/challenges/hackaprompt-2023">HackAPrompt</a>.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 my-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">Open Source Software</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain multiple Open Source projects in the large language model space. 
              Our best known project is <a href="https://learnprompting.org/docs/intro">Learn Prompting</a>, the most robust, beginner friendly guide
              on prompt engineering.
            </p>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;