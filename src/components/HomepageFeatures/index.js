import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/astronaut.png").default,
    description: <>Built for beginners</>,
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/computer.png").default,
    description: <>Spend less time for better LLM results</>,
  },
  {
    title: "Shoot for the Moon",
    Svg: require("@site/static/img/rocket.png").default,
    description: <>Learn advanced prompt engineering</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <center>
        <div className="text--center">
          <a href="docs/intro">
            <img
              src={Svg}
              alt="img"
              width="251px"
              style={{ alignSelf: "center", borderRadius: "1rem" }}
            />
          </a>
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className="margin-vert--sm">{title}</h3>
          <p>{description}</p>
        </div>
      </center>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
