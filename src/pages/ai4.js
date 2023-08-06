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
            <h1 className="text-5xl md:text-5xl font-bold mb-8 text-black">AI4 Workshop</h1>
          </div>
         <div>
            <h2>Zero-Shot Prompting - Try it yourself</h2>
            Task: You're designing prompts for an AI model to serve as an automated customer support for an e-commerce platform responsible for helping customers process returns for items they’ve purchased.
            <ol>
                <li>Define the problem scenario. The user reports, "I want to return the shoes I bought. How do I do it?"</li>
                <li>Identify the role the AI model needs to play. In this case, the model will act as a customer service representative.</li>
                <li>Formulate the prompt for the AI model. This will need to incorporate both the problem scenario and the role.</li>
            </ol>
         </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;