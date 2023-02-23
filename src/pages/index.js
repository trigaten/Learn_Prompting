import React from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { TwitterFollowButton } from "react-twitter-embed";
/* React Component Version */

import styles from "./index.module.css";

// https://codepen.io/croc/details/NWqzGYd
const DiscordButton = ({ isSSO, url }) => (
  <a
    href={url}
    className={styles.discord}
    style={{
      fontWeight: "bold",
      borderRadius: 8,
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 15px",
      backgroundColor: "#647eff",
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    <div style={{ width: 25, height: 25, marginRight: 15 }}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 245 240"
        fill="currentColor"
      >
        <path
          class="st0"
          d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
        />
        <path
          class="st0"
          d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
        />
      </svg>
    </div>
    <span>{isSSO ? "Sign in with Discord" : "Join the Discord"}</span>
  </a>
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(" hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.mytitle}>{siteConfig.title}</h1>
        
        <p className="hero__subtitle" style={{ paddingBottom: "20px" }}>
          {siteConfig.tagline}
        </p>
        
        <div className={styles.buttons}>
          <div>
            <Link to="https://discord.gg/7enStJXQzD">
              <DiscordButton></DiscordButton>
            </Link>
          </div>
          <div>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Start Learning
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <TwitterFollowButton screenName={"Learn_Prompting"} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Prompt Engineering"
    >
      
      <HomepageHeader />
      
      <main>
      <div class="text--center padding-horiz--md">      
      <h2>Join <strong>100K+</strong> people learning prompting</h2>
</div>
        <HomepageFeatures />
        <div class="text--center padding-horiz--md">
          
          <hr class="bg--secondary" />
          <h1 class="margin-vert--xl">Media on Learn Prompting</h1>
          <div className="container" style={{ marginBottom: "20px" }}>
            <div className="row">
            <div className={clsx("col col--6")}>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/k13v8jp8H5o?start=216&;" title="This Odd ChatGPT Skill Pays 335,000$/year" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className={clsx("col col--6")}>
                <iframe
                  width="560"
                  height="315"
                  style={{ maxWidth: "calc(100vw - 4rem)" }}
                  src="https://www.youtube.com/embed/pZsJbYIFCCw?start=205&;"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={clsx("col col--6")}>              
              <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/4kp7oVTu9Ck?start=486&;" title="300.000$ por un trabajo que puedes APRENDER GRATIS ▶ Curso OPEN SOURCE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
              <div className={clsx("col col--6")}>
                <h3>
                  Stay tuned for a competition with{" "}
                  <a href="https://community.towardsai.net/">Towards AI</a>
                </h3>
                <img
                  src={require("@site/static/img/towards_ai.png").default}
                  alt="img"
                  height="275px"
                  style={{ alignSelf: "center" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className={clsx("col col--12")}>
              <h4>Newsletters</h4>

              <a href="https://startupshell.substack.com/i/91962649/learn-prompting">
                <img
                  src={require("@site/static/img/shell.png").default}
                  alt="img"
                  height="40px"
                  style={{ alignSelf: "center" }}
                />
              </a>
              <a href="https://bensbites.beehiiv.com/p/bens-bites-hackathon-win-15k">
                <img
                  src={require("@site/static/img/bens_bites.webp").default}
                  alt="img"
                  height="40px"
                  style={{ alignSelf: "center" }}
                />
              </a>
              <a
                style={{ marginLeft: "10px" }}
                href="https://unwindai.substack.com/p/navigating-through-the-innov-ai-tion"
              >
                <img
                  src={require("@site/static/img/unwind.jpg").default}
                  alt="img"
                  height="40px"
                  style={{ alignSelf: "center" }}
                />
              </a>

              <a
                href="https://towardsai.net/p/newsletter/this-ai-newsletter-is-all-you-need-25"
                style={{ marginLeft: "10px" }}
              >
                <img
                  src={require("@site/static/img/towards_ai_small.png").default}
                  alt="img"
                  height="40px"
                  style={{ alignSelf: "center" }}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
