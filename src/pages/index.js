// import React from "react";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import "framer-motion";
// import "./index.css";
// import "./App.css";
// import Navbar from "../subsections/landingpage/Navbar";
// import Hero from "../subsections/landingpage/Hero";
// import Join from "../subsections/landingpage/Join";
// import FAQ from "../subsections/landingpage/FAQ";
// import Newsletter from "../subsections/landingpage/Newsletter";
// import GetStarted from "../subsections/landingpage/GetStarted";
// import Footer from "../components/Footer";
// import Banner from "../subsections/landingpage/Banner";

// function Home() {
//   return (
//     <>
//       {/*<Banner />*/}
//       <div className="bg-white">
//         <Navbar allowSandwich="true"/>
//         <Hero />
//         <Join />
//         <FAQ />
//         <Newsletter />
//         <GetStarted />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;
import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
    let url = "https://learnprompting.org"
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (
        <p>Redirecting to link..., please click <Link href={url} target="_self">here</Link> if not redirected</p>
    );
};