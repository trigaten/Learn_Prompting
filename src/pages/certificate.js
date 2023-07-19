import React from 'react';
import ReactDOM from "react-dom";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { TwitterFollowButton } from 'react-twitter-embed';
/* React Component Version */


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Prompt Engineering">
      <main>
        <div style={{ alignSelf: 'center', display:"flex", width:"100%", justifyContent:"center"}}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAMl_8iutmRj_O4iMVEJoqnwTr-0XZ5VV9ZT4jPv4lk1U4Aw/viewform?embedded=true" width="700" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
        
      </main>
    </Layout>
  );
}