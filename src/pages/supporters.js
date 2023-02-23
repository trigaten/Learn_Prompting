import React from 'react';
import ReactDOM from "react-dom";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { TwitterFollowButton } from 'react-twitter-embed';
import styles from '../components/HomepageFeatures/styles.module.css';
/* React Component Version */

const FeatureList = [
  {
    title: 'Towards AI',
    Svg: require('@site/static/img/towards-ai-logo.png').default,
    link: "https://towardsai.net",
  },
  {
    title: 'DAIR.AI',
    Svg: require('@site/static/img/dair.png').default,
    link: "https://dair.ai/",
  },
  {
    title: 'D&M',
    Svg: require('@site/static/img/dm.jpg').default,
    link: "https://socialedigitalmedia.com/en/",
  },
];

function Feature({Svg, title, link}) {
  return (
    <div className={clsx('col col--4')}>
      <center>
      <div className="text--center">
        <a href="docs/intro">
        <img src={Svg} alt="img" height="251px" style={{ alignSelf: 'center' }}/>
        </a>
        
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}><h3>{title}</h3></a> 
      </div>
      </center>
    </div>
  );
}

function Supporters() {
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Prompt Engineering">
      <main>
        <Supporters />
        
      </main>
    </Layout>
  );
}
